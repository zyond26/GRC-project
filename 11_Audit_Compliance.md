# 11. Kiểm toán & Giám sát Tuân thủ

Ngân hàng DieuBank (DB) ban hành Tiêu chuẩn Kiểm toán & Giám sát Tuân thủ này nhằm quản trị hoạt động kiểm tra kiểm soát độc lập, xác thực mức độ tuân thủ các quy định pháp luật và vận hành quy trình khắc phục sau kiểm toán theo quy định tại **Điều 34 Thông tư 09/2020/TT-NHNN** và **ISO/IEC 27001:2022 Khoản 9.2**.

---

## 1. Chương trình Kiểm toán Nội bộ (Dựa trên Rủi ro)

Bộ phận Kiểm toán Nội bộ (Tuyến phòng thủ thứ 3) hoạt động độc lập và báo cáo trực tiếp cho Ủy ban Kiểm toán thuộc HĐQT. Lịch trình kiểm toán được thiết lập dựa trên mức độ rủi ro của hệ thống:

```
  [ HỆ THỐNG RỦI RO CAO ]                [ HỆ THỐNG RỦI RO TRUNG BÌNH ]            [ HỆ THỐNG RỦI RO THẤP ]
 (Core T24, SWIFT, DB Mobile)             (Data Warehouse, Active Dir)             (Intranet, HR Training)
  Chu kỳ kiểm toán: Hàng năm               Chu kỳ kiểm toán: 18 Tháng               Chu kỳ kiểm toán: 24 Tháng
```

### Các Giai đoạn Thực hiện Kiểm toán
1.  **Lập kế hoạch (Planning)**: Xác định phạm vi kiểm toán dựa trên các thay đổi hệ thống gần nhất, danh mục rủi ro công nghệ và các phát hiện kiểm toán cũ.
2.  **Thực địa (Fieldwork)**: Thu thập bằng chứng số, chạy lệnh kiểm tra cấu hình thiết bị, phỏng vấn nhân sự vận hành và soát xét tài liệu quy trình.
3.  **Lập báo cáo (Reporting)**: Ban hành Dự thảo Báo cáo Kiểm toán chứa các điểm không tuân thủ, xếp hạng mức độ rủi ro và các khuyến nghị khắc phục.
4.  **Lập Kế hoạch Khắc phục (Remediation)**: Chủ sở hữu Nghiệp vụ và CNTT xây dựng Kế hoạch Hành động Khắc phục (CAP) có thời hạn cụ thể gửi về Ban Chỉ đạo.
5.  **Theo dõi & Đóng lỗi (Follow-up)**: Kiểm toán Nội bộ thực hiện kiểm tra lại tính hiệu lực của kiểm soát sau khi hoàn thành CAP trước khi chính thức đóng phát hiện kiểm toán.

---

## 2. Checklist Đánh giá Kiểm soát dành cho Kiểm toán viên

Bảng kiểm tra dưới đây được các kiểm toán viên sử dụng trong quá trình thực hiện kiểm tra tại thực địa.

| Mã Kiểm tra | Thủ tục Đánh giá Kiểm soát | Quy mô Mẫu kiểm tra | Kết quả Mong đợi (Pass Criteria) | Trạng thái Đánh giá |
| :--- | :--- | :---: | :--- | :---: |
| **AUD-IAM-01** | Kiểm tra cấu hình chính sách lockout tài khoản trên Active Directory. | N/A (Kiểm tra GPO) | Số lần đăng nhập sai tối đa $\le$ 5 lần; thời gian khóa tài khoản tối thiểu $\ge$ 30 phút. | **ĐẠT (PASS)** |
| **AUD-PRV-01** | Truy vấn cơ sở dữ liệu khách hàng để xác minh tính năng dynamic data masking trên tài khoản giao dịch viên. | 10 tài khoản mẫu | Tài khoản giao dịch viên chỉ nhìn thấy thông tin số thẻ và số điện thoại đã bị che giấu (`******1234`). | **ĐẠT (PASS)** |
| **AUD-OPS-01** | Soát xét nhật ký sao lưu hệ thống Core Banking và kiểm tra kết quả đợt diễn tập phục hồi DR gần nhất. | Nhật ký 3 tháng | Trạng thái sao lưu hàng đêm thành công 100% và có biên bản phê duyệt diễn tập khôi phục thảm họa. | **ĐẠT (PASS)** |
| **AUD-SEC-01** | Đối chiếu danh sách nhân sự thôi việc trong quý với trạng thái khóa tài khoản trên Active Directory. | 25 nhân sự thôi việc | 100% tài khoản nhân viên thôi việc được khóa đúng SLA (trước 17:00 ngày làm việc cuối cùng). | **KHÔNG ĐẠT (FAIL)** (Xem Phát hiện 1) |
| **AUD-CRY-01** | Rà quét mã nguồn và file cấu hình ứng dụng trên máy chủ sản xuất để tìm khóa bảo mật/mật mã. | 5 ứng dụng lõi | Các file cấu hình gọi khóa qua biến môi trường kết nối HSM; không chứa key trần (plain text key). | **KHÔNG ĐẠT (FAIL)** (Xem Phát hiện 3) |

---

## 3. Các Phát hiện Kiểm toán Mẫu & Kế hoạch Khắc phục (CAP)

### Phát hiện 1: Tài khoản Nhà thầu thôi việc vẫn ở trạng thái hoạt động (Vi phạm SLA)
*   **Mã phát hiện**: AUD-2026-001 | **Mức độ Nghiêm trọng**: Cao (High)
*   **Kiểm soát bị vi phạm**: ISO 27001:2022 A.6.5 (Rời mạng), Điều 13 Thông tư 09/2020/TT-NHNN.
*   **Mô tả lỗi**: Trong số 25 nhân sự nhà thầu thuê ngoài nghỉ việc được kiểm tra trong chu kỳ Q2 2026, có 4 tài khoản Active Directory vẫn ở trạng thái hoạt động sau 14 ngày kể từ khi kết thúc hợp đồng dự án. Nhật ký log ghi nhận có 1 tài khoản phát sinh đăng nhập vào hệ thống thử nghiệm sau khi đã nghỉ việc.
*   **Phân tích Nguyên nhân Gốc rễ (RCA)**: Nhân sự nhà thầu thuê ngoài do Phòng Mua sắm (Procurement) quản lý thủ công bằng các file bảng tính Excel riêng lẻ. Quy trình JML tự động khóa tài khoản chỉ được HR áp dụng cho nhân viên chính thức của DieuBank, dẫn đến việc thiếu kênh thông báo tự động từ Phòng Mua sắm sang bộ phận IT Systems khi nhà thầu kết thúc dự án.
*   **Kế hoạch Hành động Khắc phục (CAP)**: 
    1. Khóa lập tức 4 tài khoản nhà thầu được kiểm toán chỉ ra (Đã hoàn thành).
    2. Ban hành quy chế yêu cầu Phòng Mua sắm bắt buộc phải nhập toàn bộ thông tin vòng đời của nhà thầu vào hệ thống quản lý nhân sự tập trung (Workday).
    3. Xây dựng script PowerShell tự động đối soát thông tin kết thúc hợp đồng từ Workday hàng ngày để tự động khóa tài khoản AD tương ứng.
*   **Chủ trì**: Trưởng phòng Nhân sự & Trưởng nhóm Hệ thống Windows.
*   **Thời hạn**: Trước 30/09/2026.

---

### Phát hiện 2: Lập trình viên truy cập trực tiếp vào Cơ sở dữ liệu Replica chứa thông tin thô
*   **Mã phát hiện**: AUD-2026-002 | **Mức độ Nghiêm trọng**: Cao (High)
*   **Kiểm soát bị vi phạm**: ISO 27001:2022 A.8.11 (Che giấu dữ liệu), Điều 26 Nghị định 13/2023/NĐ-CP.
*   **Mô tả lỗi**: Kiểm toán viên phát hiện 3 lập trình viên thuộc Khối Số đang thực hiện các lệnh SQL SELECT trực tiếp trên máy chủ cơ sở dữ liệu replica chứa toàn bộ thông tin gốc chưa được che giấu về số dư tài khoản và số điện thoại thật của khách hàng.
*   **Phân tích Nguyên nhân Gốc rễ (RCA)**: Tiến trình chạy script che giấu dữ liệu tĩnh (Informatica static data masking) hàng đêm gặp lỗi do thay đổi cấu trúc bảng dữ liệu (schema) sau bản cập nhật phần mềm trước đó. Để không làm gián đoạn tiến độ thử nghiệm tính năng mới của dự án, bộ phận DBA đã cấp quyền truy cập trực tiếp vào database replica cho nhóm phát triển thông qua yêu cầu phê duyệt bằng email thông thường, bỏ qua quy trình đánh giá rủi ro an toàn thông tin của CISO.
*   **Kế hoạch Hành động Khắc phục (CAP)**:
    1. Thu hồi toàn bộ tài khoản có quyền truy cập trực tiếp của lập trình viên trên máy chủ database replica (Đã hoàn thành).
    2. Cấu hình lại tác vụ Informatica masking để tương thích với cấu trúc bảng mới, thiết lập lại database đã che giấu dữ liệu chuyển về phân vùng thử nghiệm.
    3. Thiết lập luật tường lửa (Firewall rules) chặn toàn bộ kết nối mạng trực tiếp từ phân vùng máy trạm lập trình viên đến các máy chủ cơ sở dữ liệu production và replica.
*   **Chủ trì**: Trưởng nhóm Quản trị Cơ sở dữ liệu (Lead DBA) & Trưởng bộ phận Phát triển.
*   **Thời hạn**: Trước 31/07/2026.

---

### Phát hiện 3: Khóa Master giải mã dữ liệu lưu trữ dưới dạng text rõ
*   **Mã phát hiện**: AUD-2026-003 | **Mức độ Nghiêm trọng**: Nghiêm trọng (Critical)
*   **Kiểm soát bị vi phạm**: ISO 27001:2022 A.8.24 (Sử dụng mật mã), Điều 18 Thông tư 09/2020/TT-NHNN.
*   **Mô tả lỗi**: Trong quá trình rà quét mã nguồn của ứng dụng Mobile Banking API Gateway, kiểm toán viên phát hiện khóa master dùng để giải mã cơ sở dữ liệu khách hàng được lưu trữ dưới dạng text trần (plain text key) ngay trong tệp tin cấu hình ứng dụng (`db_config.ini`).
*   **Phân tích Nguyên nhân Gốc rễ (RCA)**: Ứng dụng API Gateway được chuyển dịch từ nền tảng cũ chưa hỗ trợ các thư viện gọi hàm (API calls) kết nối trực tiếp đến hệ thống thiết bị Luna HSM mới triển khai. Để kịp tiến độ golive dự án số, lập trình viên đã chọn giải pháp lưu trữ cứng khóa giải mã trong file cấu hình như một biện pháp tạm thời và bỏ quên không gỡ bỏ khi đưa lên môi trường sản xuất.
*   **Kế hoạch Hành động Khắc phục (CAP)**:
    1. Tiến hành xoay vòng (change key) khóa giải mã cơ sở dữ liệu trên phân vùng Oracle DB cluster sản xuất.
    2. Viết lại mã nguồn ứng dụng API Gateway để gọi khóa động thời gian thực từ thiết bị Luna HSM thông qua cơ chế xác thực chứng chỉ số SSL client.
    3. Cấu hình công cụ quét nhạy cảm GitGuardian tích hợp vào GitLab repository để tự động chặn các commit chứa mật khẩu hoặc khóa bảo mật đẩy lên repo.
*   **Chủ trì**: Trưởng bộ phận Phát triển Ứng dụng.
*   **Thời hạn**: Trước 31/08/2026.

---

### Phát hiện 4: Thiếu báo cáo đánh giá diễn tập thảm họa (DRP) cho hệ thống SWIFT Gateway
*   **Mã phát hiện**: AUD-2026-004 | **Mức độ Nghiêm trọng**: Cao (High)
*   **Kiểm soát bị vi phạm**: ISO 27001:2022 A.5.30 (Tính sẵn sàng DRP), Điều 25 Thông tư 09/2020/TT-NHNN.
*   **Mô tả lỗi**: Ngân hàng không cung cấp được báo cáo kết quả diễn tập khôi phục thảm họa (Disaster Recovery) cho hệ thống thanh toán quốc tế SWIFT Gateway trong vòng 12 tháng qua.
*   **Phân tích Nguyên nhân Gốc rễ (RCA)**: Do hệ thống SWIFT nâng cấp phiên bản phần cứng và thay đổi cấu trúc định tuyến quốc tế, ban dự án ưu tiên tiến độ kỹ thuật và hoãn lịch diễn tập chuyển mạch dự phòng mà không làm thủ tục phê duyệt hoãn từ Hội đồng Quản lý Rủi ro.
*   **Kế hoạch Hành động Khắc phục (CAP)**: 
    1. Thiết lập lịch diễn tập khôi phục thảm họa đặc biệt cho hệ thống SWIFT chuyển site BD dự phòng vào ngày cuối tuần.
    2. Hoàn thiện báo cáo kết quả kiểm toán chuyển site và đệ trình lên Ban chỉ đạo CNTT.
*   **Chủ trì**: Trưởng nhóm Hệ thống SWIFT & Trưởng nhóm Hạ tầng.
*   **Thời hạn**: Trước 15/10/2026.

---

### Phát hiện 5: Hệ điều hành máy trạm giao dịch viên lỗi thời, thiếu bản vá bảo mật
*   **Mã phát hiện**: AUD-2026-005 | **Mức độ Nghiêm trọng**: Trung bình (Medium)
*   **Kiểm soát bị vi phạm**: ISO 27001:2022 A.8.9 (Quản lý lỗ hổng), Điều 19 Thông tư 09/2020/TT-NHNN.
*   **Mô tả lỗi**: Kiểm tra ngẫu nhiên 50 máy trạm giao dịch viên tại 5 chi nhánh, phát hiện 8 máy vẫn chạy Windows 10 phiên bản cũ đã hết hạn hỗ trợ bảo mật (EOL) và thiếu các bản vá an ninh hệ điều hành trong 6 tháng qua.
*   **Phân tích Nguyên nhân Gốc rễ (RCA)**: Các máy trạm này thuộc khu vực chi nhánh tỉnh có băng thông kết nối WAN yếu, dẫn đến việc tải file cập nhật lớn từ máy chủ SCCM trung tâm liên tục bị lỗi và hệ thống tự động bỏ qua.
*   **Kế hoạch Hành động Khắc phục (CAP)**:
    1. Thực hiện nâng cấp thủ công OS lên phiên bản Windows 10/11 được hỗ trợ cho 8 máy trạm phát hiện lỗi.
    2. Cấu hình chính sách SCCM tối ưu hóa truyền tải bản vá qua tính năng Peer-to-Peer trong mạng LAN chi nhánh.
*   **Chủ trì**: Trưởng phòng Hỗ trợ Kỹ thuật IT (IT Helpdesk).
*   **Thời hạn**: Trước 15/08/2026.

---

### Phát hiện 6: Chia sẻ thông tin khách hàng cho đối tác bảo hiểm khi chưa có sự đồng ý rõ ràng
*   **Mã phát hiện**: AUD-2026-006 | **Mức độ Nghiêm trọng**: Cao (High)
*   **Kiểm soát bị vi phạm**: Điều 9 & 11 Nghị định 13/2023/NĐ-CP (Bảo vệ dữ liệu cá nhân).
*   **Mô tả lỗi**: Phát hiện dữ liệu cá nhân của 1,200 khách hàng đăng ký vay tiêu dùng được chuyển tự động sang hệ thống của đối tác liên kết bảo hiểm (Bancassurance) khi ô lựa chọn đồng ý chia sẻ thông tin trên biểu mẫu điện tử được tích chọn sẵn (pre-ticked) mặc định.
*   **Phân tích Nguyên nhân Gốc rễ (RCA)**: Thiết kế giao diện luồng đăng ký trực tuyến (UI/UX) do Khối Bán lẻ triển khai ưu tiên tỷ lệ chuyển đổi số, bỏ qua đánh giá pháp lý của phòng tuân thủ về quy định sự đồng ý tự nguyện và chủ động của khách hàng.
*   **Kế hoạch Hành động Khắc phục (CAP)**:
    1. Sửa lỗi giao diện đăng ký trực tuyến, bỏ tính năng tự động tích chọn sẵn; bắt buộc khách hàng phải chủ động tích chọn đồng ý.
    2. Gửi thông báo xác nhận lại sự đồng ý cho 1,200 khách hàng đã chia sẻ thông tin.
*   **Chủ trì**: Trưởng phòng Phát triển Sản phẩm Số & DPO.
*   **Thời hạn**: Trước 31/07/2026.

---

### Phát hiện 7: Sử dụng tài khoản dùng chung (shared accounts) quản trị thiết bị mạng
*   **Mã phát hiện**: AUD-2026-007 | **Mức độ Nghiêm trọng**: Nghiêm trọng (Critical)
*   **Kiểm soát bị vi phạm**: ISO 27001:2022 A.5.16 (Quản lý định danh), Điều 16 Thông tư 09/2020/TT-NHNN.
*   **Mô tả lỗi**: Phát hiện tài khoản quản trị mặc định "admin" được 4 kỹ sư mạng sử dụng chung để cấu hình thiết bị Router Core tại trung tâm dữ liệu phụ BD, dẫn đến việc nhật ký log ghi nhận không thể xác định chính xác ai thực hiện thay đổi cấu hình.
*   **Phân tích Nguyên nhân Gốc rễ (RCA)**: Bộ phận quản trị mạng chưa tích hợp cơ chế xác thực tập trung TACACS+ cho các thiết bị tại Site dự phòng, duy trì tài khoản cục bộ (local account) để thuận tiện xử lý sự cố nhanh.
*   **Kế hoạch Hành động Khắc phục (CAP)**:
    1. Vô hiệu hóa tài khoản quản trị mặc định "admin" trên toàn bộ thiết bị mạng (Đã hoàn thành).
    2. Cấu hình tích hợp xác thực TACACS+ kết nối Active Directory, bắt buộc mỗi kỹ sư dùng tài khoản cá nhân định danh riêng để đăng nhập thiết bị.
*   **Chủ trì**: Trưởng nhóm Mạng.
*   **Thời hạn**: Trước 31/08/2026.

---

### Phát hiện 8: Nhật ký log máy chủ Internet Banking không đẩy về hệ thống SIEM
*   **Mã phát hiện**: AUD-2026-008 | **Mức độ Nghiêm trọng**: Trung bình (Medium)
*   **Kiểm soát bị vi phạm**: ISO 27001:2022 A.8.19 (Quản lý nhật ký), Điều 22 Thông tư 09/2020/TT-NHNN.
*   **Mô tả lỗi**: Rà soát trạng thái log ingestion trên Splunk SIEM, phát hiện log vận hành của 2 máy chủ Apache Web Server chạy dịch vụ Internet Banking đã ngừng đẩy về SIEM trong vòng 20 ngày qua.
*   **Phân tích Nguyên nhân Gốc rễ (RCA)**: Tiến trình trung chuyển log (Universal Forwarder agent) trên máy chủ web bị crash sau khi ổ cứng hệ thống bị đầy. Hệ thống cảnh báo tự động của SOC chưa thiết lập luật phát hiện mất nguồn log (Heartbeat loss) đối với nhóm máy chủ web.
*   **Kế hoạch Hành động Khắc phục (CAP)**:
    1. Khởi động lại agent và giải phóng không gian đĩa để tái lập kết nối đẩy log về SIEM (Đã hoàn thành).
    2. Cấu hình luật cảnh báo tự động trên Splunk khi bất kỳ máy chủ quan trọng nào mất kết nối log quá 10 phút.
*   **Chủ trì**: Quản lý SOC.
*   **Thời hạn**: Trước 10/08/2026.

---

### Phát hiện 9: Chậm trễ nộp Hồ sơ đánh giá tác động DPIA lên Cục A05 - Bộ Công an
*   **Mã phát hiện**: AUD-2026-009 | **Mức độ Nghiêm trọng**: Cao (High)
*   **Kiểm soát bị vi phạm**: Điều 38 Nghị định 13/2023/NĐ-CP.
*   **Mô tả lỗi**: Hệ thống chấm điểm tín dụng tự động (Credit Scoring) ứng dụng AI mới đưa vào vận hành 75 ngày nhưng Hồ sơ đánh giá tác động xử lý dữ liệu cá nhân (DPIA) tương ứng chưa được gửi báo cáo lên Cục A05 (vượt quá thời hạn quy định 60 ngày).
*   **Phân tích Nguyên nhân Gốc rễ (RCA)**: Thiếu sự phối hợp giữa phòng phát triển mô hình AI và bộ phận DPO; phòng phát triển sản phẩm không thực hiện đánh giá phân loại rủi ro quyền riêng tư trước khi đưa hệ thống vào chạy thật.
*   **Kế hoạch Hành động Khắc phục (CAP)**:
    1. Hoàn thiện tài liệu thuyết minh kỹ thuật hệ thống AI Credit Scoring.
    2. Ban DPO hoàn thiện Hồ sơ DPIA Mẫu số 02 và đệ trình khẩn cấp lên Cục A05 - Bộ Công an.
*   **Chủ trì**: Nhân sự DPO & Trưởng bộ phận AI Lab.
*   **Thời hạn**: Trước 20/07/2026.

---

### Phát hiện 10: Băng từ sao lưu lưu trữ offsite không đảm bảo an toàn vật lý
*   **Mã phát hiện**: AUD-2026-010 | **Mức độ Nghiêm trọng**: Trung bình (Medium)
*   **Kiểm soát bị vi phạm**: ISO 27001:2022 A.7.6 (Phương tiện lưu trữ), Điều 14 Thông tư 09/2020/TT-NHNN.
*   **Mô tả lỗi**: 15 băng từ chứa bản sao lưu dữ liệu giao dịch lịch sử được lưu trữ tại tủ sắt văn phòng của Chi nhánh Hà Nội, thiếu hệ thống điều hòa kiểm soát nhiệt độ/độ ẩm, không có hệ thống chữa cháy khí sạch tự động và thiếu camera giám sát góc tủ.
*   **Phân tích Nguyên nhân Gốc rễ (RCA)**: Phòng Giao dịch Hà Nội được cải tạo không gian và tận dụng tủ văn phòng cũ làm kho lưu trữ offsite tạm thời để tiết kiệm chi phí thuê kho chuyên dụng ngoài DC.
*   **Kế hoạch Hành động Khắc phục (CAP)**:
    1. Di dời toàn bộ 15 băng từ về lưu trữ tại két chống cháy chuyên dụng đặt trong phòng máy chủ Chi nhánh cấp 1 Hà Nội (Đã hoàn thành).
    2. Ký hợp đồng dịch vụ lưu trữ băng từ an toàn với đơn vị lưu trữ chuyên nghiệp bên thứ ba có chứng chỉ bảo mật.
*   **Chủ trì**: Trưởng chi nhánh Hà Nội & Trưởng nhóm Hạ tầng IT.
*   **Thời hạn**: Trước 30/09/2026.

