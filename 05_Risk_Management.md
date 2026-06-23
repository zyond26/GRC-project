# 05. Tiêu chuẩn Quản lý Rủi ro & Danh mục Rủi ro

Ngân hàng DieuBank (DB) áp dụng quy trình quản lý rủi ro công nghệ thông tin phù hợp với các hướng dẫn của tiêu chuẩn quốc tế **ISO/IEC 27005:2022**.

---

## 1. Phương pháp Đánh giá Rủi ro (ISO 27005)

Quy trình quản lý rủi ro CNTT tại DieuBank được thực hiện thông qua các bước có cấu trúc sau:

```
+-------------------------------------------------------------------------------+
|                            THIẾT LẬP BỐI CẢNH DỰ ÁN                           |
|       Xác định Khẩu vị Rủi ro, Phạm vi và các Biên giới Tuân thủ Pháp lý      |
+--------------------------------------++----------------------------------------+
                                       ||
                                       vv
+-------------------------------------------------------------------------------+
|                             NHẬN DIỆN RỦI RO                                  |
|         Định danh Tài sản, Mối đe dọa và các Điểm yếu An ninh liên quan       |
+--------------------------------------++----------------------------------------+
                                       ||
                                       vv
+-------------------------------------------------------------------------------+
|                              PHÂN TÍCH RỦI RO                                 |
|       Tính điểm Rủi ro Tiêu tàng (Inherent Risk = Likelihood x Impact)        |
+--------------------------------------++----------------------------------------+
                                       ||
                                       vv
+-------------------------------------------------------------------------------+
|                              ĐÁNH GIÁ RỦI RO                                  |
|  So sánh mức rủi ro với Khẩu vị Rủi ro & Xác định tính hiệu lực của kiểm soát |
+--------------------------------------++----------------------------------------+
                                       ||
                                       vv
+-------------------------------------------------------------------------------+
|                                XỬ LÝ RỦI RO                                   |
|   Lựa chọn hành động: Giảm thiểu (Mitigate), Chấp nhận, Chuyển giao, Né tránh |
+-------------------------------------------------------------------------------+
```

---

## 2. Ma trận Tính điểm Rủi ro

Điểm số rủi ro được tính toán theo công thức toán học:
$$\text{Điểm Rủi ro} = \text{Điểm Khả năng Xảy ra (L)} \times \text{Điểm Mức độ Tác động (I)}$$

### Thang điểm Khả năng Xảy ra (Likelihood: 1-5)

| Điểm | Tần suất | Mô tả Chi tiết |
| :---: | :--- | :--- |
| **5** | Rất thường xuyên | Xảy ra hàng tuần hoặc hàng tháng; hệ thống hoàn toàn thiếu các kiểm soát bảo vệ. |
| **4** | Thường xuyên | Xảy ra hàng quý hoặc hàng năm; mối đe dọa đã xuất hiện nhiều lần trong ngành ngân hàng Việt Nam. |
| **3** | Có thể xảy ra | Có khả năng xảy ra trong vòng 1 - 2 năm; tồn tại các lỗ hổng bảo mật phổ thông. |
| **2** | Hiếm khi xảy ra | Có thể xảy ra 1 lần trong 5 năm; các kiểm soát an ninh đã được kích hoạt một phần. |
| **1** | Rất hiếm khi | Có thể xảy ra 1 lần trong 10 năm; hệ thống được bảo vệ bằng các kiểm soát chủ động và mạnh mẽ. |

### Thang điểm Mức độ Tác động (Impact: 1-5)

| Điểm | Mức độ | Tổn thất Tài chính | Thời gian Ngừng hoạt động | Tác động Pháp lý & Quyền riêng tư |
| :---: | :---: | :--- | :--- | :--- |
| **5** | Thảm họa | >50 Tỷ VND | Hệ thống lõi ngừng >24h | Thu hồi giấy phép hoạt động ngân hàng số, xử lý hình sự, phạt tối đa 5% doanh thu theo Nghị định 13. |
| **4** | Nghiêm trọng | 5B - 50B VND | Các kênh giao dịch ngừng >4h | Phạt tiền lớn từ NHNN, rò rỉ dữ liệu cá nhân nhạy cảm của nhiều khách hàng báo cáo lên Bộ Công an. |
| **3** | Trung bình | 500M - 5B VND | Hệ thống ngừng 1 - 4h | Nhận văn bản cảnh cáo từ NHNN, rò rỉ dữ liệu cục bộ ảnh hưởng đến dưới 1.000 khách hàng. |
| **2** | Nhỏ | 50M - 500M VND | Trễ nải dịch vụ cục bộ | Nhận các khuyến nghị kiểm toán, thông tin rò rỉ nội bộ không gây ảnh hưởng ra công chúng. |
| **1** | Không đáng kể | <50 Triệu VND | Hệ thống nội bộ ngừng | Không có tác động pháp lý, không ảnh hưởng đến khách hàng. |

### Ma trận Mức độ Rủi ro (Bản đồ nhiệt $5 \times 5$)

*   **Thấp (1-4)**: Rủi ro có thể chấp nhận. Giám sát trong các chu kỳ vận hành thông thường.
*   **Trung bình (5-9)**: Cần xem xét định kỳ và tối ưu hóa các biện pháp kiểm soát hiện tại.
*   **Cao (10-16)**: Bắt buộc phải xây dựng kế hoạch giảm thiểu rủi ro kèm theo thời hạn hoàn thành cụ thể.
*   **Nghiêm trọng (20-25)**: Bắt buộc leo thang báo cáo ngay lập tức cho Ban điều hành/HĐQT. Áp dụng các biện pháp kiểm soát khẩn cấp hoặc tạm ngưng hệ thống.

```
       MỨC ĐỘ TÁC ĐỘNG ->
K   +---------------+---------------+---------------+---------------+---------------+
H 5 | 5 [Trung bình]| 10 [Cao]      | 15 [Cao]      | 25 [N.Trọng]  | 25 [N.Trọng]  |
Ả   +---------------+---------------+---------------+---------------+---------------+
N 4 | 4 [Thấp]      |  8 [Trung bình] | 12 [Cao]    | 16 [Cao]      | 20 [N.Trọng]  |
Ă   +---------------+---------------+---------------+---------------+---------------+
N 3 | 3 [Thấp]      |  6 [Trung bình] |  9 [Trung bình] | 12 [Cao]  | 15 [Cao]      |
G   +---------------+---------------+---------------+---------------+---------------+
2 | 2 [Thấp]      |  4 [Thấp]      |  6 [Trung bình] |  8 [Trung bình] | 10 [Cao]    |
X   +---------------+---------------+---------------+---------------+---------------+
1 | 1 [Thấp]      |  2 [Thấp]      |  3 [Thấp]      |  4 [Thấp]      |  5 [Trung bình]|
    +---------------+---------------+---------------+---------------+---------------+
            1               2               3               4               5
```

---

## 3. Tuyên bố Khẩu vị Rủi ro (Risk Appetite)

Hội đồng Quản trị DieuBank thiết lập các giới hạn khẩu vị rủi ro công nghệ như sau:
*   **Hệ thống Lõi (T24 & SWIFT)**: Hoàn toàn không chấp nhận rủi ro ở mức "Nghiêm trọng" hoặc "Cao". Mọi rủi ro phát hiện phải được đưa về mức rủi ro còn lại "Trung bình" hoặc "Thấp" trong vòng 30 ngày.
*   **Bảo vệ Dữ liệu Khách hàng (Nghị định 13)**: Hoàn toàn không chấp nhận việc lưu trữ dữ liệu PII không mã hóa trên các hệ thống sản xuất. Bắt buộc che giấu dữ liệu khi sử dụng ở môi trường phát triển/thử nghiệm.
*   **Tính sẵn sàng Vận hành**: Chấp nhận rủi ro ở mức trung bình đối với các hệ thống quản trị nội bộ (như Kho dữ liệu DWH, Intranet), cho phép thời gian khôi phục tối đa lên đến 24 giờ.

---

## 4. Quy trình Xử lý & Phê duyệt Chấp nhận Rủi ro

### Quy trình Xử lý Rủi ro
Đối với mỗi rủi ro được xác định, DieuBank lựa chọn một trong bốn phương án xử lý:
1.  **Giảm thiểu (Mitigate)**: Thiết lập thêm các kiểm soát kỹ thuật hoặc kiểm soát quản trị để giảm thiểu khả năng xảy ra hoặc tác động của rủi ro.
2.  **Chuyển giao (Transfer)**: Mua bảo hiểm an ninh mạng hoặc thuê ngoài dịch vụ cho các đối tác chuyên nghiệp (ngân hàng vẫn chịu trách nhiệm tuân thủ, nhưng chia sẻ thiệt hại tài chính).
3.  **Né tránh (Avoid)**: Ngừng cung cấp dịch vụ hoặc loại bỏ cấu phần hệ thống phát sinh rủi ro.
4.  **Chấp nhận (Accept)**: Tạm thời giữ nguyên trạng thái rủi ro khi chi phí khắc phục vượt quá giá trị thiệt hại dự kiến, tuân theo quy trình phê duyệt nghiêm ngặt.

### Quy trình Phê duyệt Chấp nhận Rủi ro
*   **Điều kiện**: Chỉ các rủi ro có điểm rủi ro còn lại ở mức "Trung bình" hoặc "Thấp" mới được xem xét chấp nhận rủi ro dài hạn.
*   **Trường hợp Đặc biệt**: Rủi ro còn lại ở mức "Cao" chỉ được phê duyệt chấp nhận tạm thời tối đa 6 tháng trong các điều kiện khẩn cấp nghiệp vụ, yêu cầu chữ ký phê duyệt liên đới của cả Giám đốc Quản trị Rủi ro (CRO) và Tổng Giám đốc (CEO).
*   **Thẩm quyền Phê duyệt**:
    *   Rủi ro Thấp: CISO phê duyệt.
    *   Rủi ro Trung bình: CRO và CIO đồng phê duyệt.
    *   Rủi ro Cao: CEO phê duyệt báo cáo HĐQT.
    *   Rủi ro Nghiêm trọng: **Hoàn toàn không được chấp nhận.** Bắt buộc phải áp dụng biện pháp né tránh hoặc giảm thiểu khẩn cấp.

---

## 5. Sổ đăng ký Rủi ro CNTT (30 Kịch bản Rủi ro)

*   **L**: Khả năng xảy ra (1-5) | **I**: Mức độ tác động (1-5) | **R**: Điểm rủi ro (1-25)

| Mã RR | Tài sản Ảnh hưởng | Kịch bản Mối đe dọa | Điểm yếu An ninh | L | I | R Tiềm tàng | Kiểm soát Hiện tại | L | I | R Còn lại | Chủ sở hữu | Kế hoạch Hành động Khắc phục (Treatment Plan) |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :--- | :---: | :---: | :---: | :--- | :--- |
| **RSK-01** | Core Banking (T24) | Mã độc tống tiền mã hóa toàn bộ dữ liệu T24. | Hệ điều hành máy chủ Core chưa được vá lỗ hổng. | 3 | 5 | **15 [Cao]** | Phần mềm diệt virus thông thường, sao lưu băng từ hàng ngày. | 2 | 5 | **10 [Cao]** | Trưởng nhóm IT Core | Triển khai CrowdStrike EDR, thiết lập vùng lưu trữ sao lưu cô lập bất biến (immutable), phân vùng mạng DB lõi. |
| **RSK-02** | SWIFT Gateway | API bị chiếm quyền điều khiển, chuyển tiền giả. | Sử dụng API key tĩnh, thiếu xác thực đa yếu tố (MFA). | 3 | 5 | **15 [Cao]** | Giới hạn địa chỉ IP kết nối (IP whitelisting). | 2 | 5 | **10 [Cao]** | Trưởng khối Nguồn vốn | Triển khai CyberArk PAM, bắt buộc xác thực MFA cho giao dịch viên SWIFT, cấu hình cảnh báo giao dịch bất thường trên SIEM. |
| **RSK-03** | Database Khách hàng | Rò rỉ dữ liệu PII qua SQL Injection trên web. | Ứng dụng web Internet Banking thiếu lọc dữ liệu đầu vào. | 4 | 4 | **16 [Cao]** | Mã hóa đường truyền SSL/TLS, đánh giá kiểm thử xâm nhập (pentest) hàng năm. | 2 | 4 | **8 [T.Bình]** | Nhân sự DPO / Khối Số | Triển khai Tường lửa Ứng dụng Web (WAF), tích hợp công cụ quét mã nguồn tự động SAST/DAST trong quy trình CI/CD. |
| **RSK-04** | Mạng lưới ATM | Kẻ gian hack cổng USB vật lý để rút tiền (jackpotting).| Khe cắm USB trên vỏ máy ATM không được khóa bảo vệ. | 4 | 3 | **12 [Cao]** | Camera giám sát CCTV tại buồng ATM. | 2 | 3 | **6 [T.Bình]** | Trưởng Trung tâm Thẻ | Lắp đặt hộp khóa bảo vệ cổng vật lý, mã hóa toàn bộ ổ cứng máy ATM (BitLocker), vô hiệu hóa cổng kết nối USB trên OS. |
| **RSK-05** | Hệ duyệt Tín dụng | Nhân viên nâng điểm tín dụng nội bộ trái phép. | Hệ thống thiếu tính năng giám sát hoạt động DB (DAM). | 3 | 4 | **12 [Cao]** | Phân quyền truy cập tài khoản Active Directory. | 2 | 4 | **8 [T.Bình]** | Giám đốc Khối Tín dụng | Triển khai Imperva DAM ghi nhận log truy vấn SQL, áp dụng quy trình duyệt kép (four-eyes) đối với các giao dịch ghi đè hạn mức. |
| **RSK-06** | Active Directory | Tài khoản thường leo thang đặc quyền lên Domain Admin. | Cấu hình giao thức xác thực NTLMv1 cũ, mật khẩu admin yếu. | 4 | 4 | **16 [Cao]** | Chính sách lưu lịch sử mật khẩu tối đa 5 lần. | 2 | 4 | **8 [T.Bình]** | Giám đốc Công nghệ | Vô hiệu hóa NTLMv1, triển khai giải pháp giám sát Microsoft Defender for Identity, nâng độ dài mật khẩu tối thiểu lên 16 ký tự. |
| **RSK-07** | Mobile Banking | Tấn công DDoS làm tê liệt ứng dụng Mobile App. | Chưa sử dụng dịch vụ chống DDoS chuyên dụng của ISP. | 4 | 4 | **16 [Cao]** | Thuê 2 đường truyền Internet dự phòng của các nhà mạng khác nhau. | 2 | 4 | **8 [T.Bình]** | Trưởng khối Ngân hàng Số | Định tuyến lưu lượng Mobile Banking qua dịch vụ Cloudflare Magic Transit để lọc và làm sạch lưu lượng DDoS. |
| **RSK-08** | Mobile App | Thư viện SDK bên thứ ba trong app chứa mã độc. | Quy trình đánh giá bảo mật chuỗi cung ứng phần mềm yếu. | 3 | 4 | **12 [Cao]** | Lập trình viên xem xét mã nguồn thủ công trước khi release. | 2 | 4 | **8 [T.Bình]** | Trưởng nhóm Mobile Dev| Tích hợp công cụ tự động quét thành phần phần mềm (Snyk SBOM scanner) vào quy trình phát triển. |
| **RSK-09** | Hệ thống Email | Tài khoản admin IT bị hack bằng email lừa đảo. | Không bắt buộc xác thực Token cứng FIDO2 cho tài khoản admin. | 4 | 4 | **16 [Cao]** | Yêu cầu xác thực tài khoản qua mật khẩu và nhận mã OTP SMS. | 2 | 4 | **8 [T.Bình]** | Giám đốc ATTT (CISO) | Cấp phát khóa cứng bảo mật YubiKey cho 100% tài khoản có đặc quyền quản trị hệ thống. |
| **RSK-10** | Thiết bị HSM | Lộ khóa giải mã cơ sở dữ liệu khách hàng. | Khóa mã hóa được lưu dạng văn bản rõ trong file config ứng dụng. | 2 | 5 | **10 [Cao]** | Giới hạn quyền truy cập thư mục cấu hình bằng mật khẩu. | 1 | 5 | **5 [T.Bình]** | Giám đốc ATTT (CISO) | Chuyển toàn bộ khóa mã hóa vào thiết bị Luna HSM; ứng dụng truy xuất khóa thông qua API chứng chỉ SSL client. |
| **RSK-11** | Phòng máy chủ | Kẻ gian đột nhập trực tiếp vào phòng máy chủ chính. | Cửa phòng máy chủ chỉ sử dụng khóa từ thông thường. | 2 | 4 | **8 [T.Bình]** | Bảo vệ trực 24/7 tại sảnh chính tòa nhà. | 1 | 4 | **4 [Thấp]** | Trưởng bộ phận Thiết bị | Lắp đặt khóa sinh trắc học vân tay/tĩnh mạch, cảm biến chuyển động hồng ngoại và hệ thống cảnh báo còi hú. |
| **RSK-12** | Máy trạm làm việc | Tin tặc nghe lén lưu lượng làm việc từ xa của nhân viên. | Nhân viên kết nối mạng nội bộ qua Wi-Fi gia đình không mã hóa.| 4 | 3 | **12 [Cao]** | Cài đặt ứng dụng VPN client trên máy tính xách tay. | 2 | 3 | **6 [T.Bình]** | Trưởng nhóm Hạ tầng | Bắt buộc kết nối qua VPN Always-On, tích hợp kiểm tra an toàn thiết bị (Host Checker) trước khi cho phép đăng nhập AD. |
| **RSK-13** | Dữ liệu Sao lưu | Bản sao lưu bị lỗi không thể khôi phục khi gặp thảm họa.| Không thực hiện kiểm tra khôi phục bản sao lưu định kỳ. | 3 | 5 | **15 [Cao]** | Tự động chạy tiến trình sao lưu hàng đêm theo lịch trình. | 2 | 5 | **10 [Cao]** | Trưởng nhóm Hạ tầng | Cấu hình script kiểm tra tính toàn vẹn của file sao lưu; thực hiện khôi phục giả lập trên môi trường Sandbox hàng tháng. |
| **RSK-14** | Database Khách hàng | Vi phạm yêu cầu xóa dữ liệu của Nghị định 13. | Thiếu quy trình kỹ thuật để xóa sạch dữ liệu khách hàng. | 4 | 4 | **16 [Cao]** | Thu thập phiếu yêu cầu đồng thuận của khách hàng bằng giấy. | 2 | 4 | **8 [T.Bình]** | Nhân sự DPO | Phát triển công cụ tự động hóa quy trình xóa/ẩn danh dữ liệu khách hàng trên hệ thống Core T24 theo yêu cầu DSR. |
| **RSK-15** | Thiết bị Đầu cuối | Nhân viên sao chép dữ liệu khách hàng ra USB cá nhân. | Các cổng USB trên máy trạm làm việc không bị chặn kết nối. | 4 | 3 | **12 [Cao]** | Ban hành nội quy cấm sử dụng thiết bị lưu trữ ngoài. | 2 | 3 | **6 [T.Bình]** | Giám đốc ATTT (CISO) | Triển khai chính sách MDM khóa tính năng đọc/ghi đối với các thiết bị lưu trữ USB ngoại vi trên toàn ngân hàng. |
| **RSK-16** | Internet Banking | Lỗ hổng zero-day (như Log4j) bị hacker khai thác. | Quy trình cập nhật bản vá lỗ hổng ứng dụng chậm trễ. | 4 | 5 | **20 [N.Trọng]**| Thực hiện cập nhật phần mềm định kỳ hàng tháng. | 2 | 5 | **10 [Cao]** | Trưởng khối Ngân hàng Số | Thiết lập hệ thống quét lỗ hổng liên tục (Tenable) tích hợp cơ chế cập nhật Signature tự động cho WAF. |
| **RSK-17** | Active Directory | Nhân viên đã nghỉ việc vẫn đăng nhập được hệ thống. | Quy trình báo cáo nhân sự thôi việc giữa HR và IT bị chậm trễ. | 4 | 4 | **16 [Cao]** | Đối soát thủ công danh sách nhân sự thôi việc hàng tháng. | 2 | 4 | **8 [T.Bình]** | Trưởng khối Nhân sự | Liên kết trực tiếp cơ sở dữ liệu nhân sự (Workday) với Active Directory để tự động vô hiệu hóa tài khoản khi trạng thái nghỉ việc. |
| **RSK-18** | SOC SIEM | Không phát hiện được tấn công tại các chi nhánh tỉnh. | Thiết bị định tuyến tại các chi nhánh không đẩy log về SIEM. | 3 | 3 | **9 [T.Bình]** | Thu thập log từ tường lửa trung tâm (Core Firewall). | 2 | 3 | **6 [T.Bình]** | Quản lý SOC | Cấu hình giao thức đẩy log Syslog trên toàn bộ router chi nhánh về máy thu thập tập trung của SIEM. |
| **RSK-19** | Kho dữ liệu (DWH) | Thùng lưu trữ cloud chứa dữ liệu báo cáo bị mở công khai.| Thiếu công cụ giám sát cấu hình bảo mật đám mây. | 3 | 4 | **12 [Cao]** | Phân quyền truy cập tài khoản cloud bằng mật khẩu. | 1 | 4 | **4 [Thấp]** | Giám đốc Công nghệ | Triển khai giải pháp CSPM tự động quét và chặn cấu hình public thùng lưu trữ cloud chứa thông tin báo cáo. |
| **RSK-20** | Thiết bị Switch | Sự cố lặp định tuyến làm sập mạng kết nối ATM. | Không cấu hình giao thức chống lặp vòng định tuyến mạng. | 3 | 3 | **9 [T.Bình]** | Triển khai các thiết bị mạng chạy song song dự phòng vật lý. | 1 | 3 | **3 [Thấp]** | Trưởng nhóm Mạng | Cấu hình lại các chính sách định tuyến và kích hoạt giao thức Spanning Tree Protocol (STP) trên toàn bộ switch chi nhánh. |
| **RSK-21** | Băng từ Sao lưu | Băng từ lưu trữ bị mất cắp trong quá trình vận chuyển. | Dữ liệu sao lưu trên băng từ không được mã hóa. | 2 | 4 | **8 [T.Bình]** | Vận chuyển băng từ bằng vali có khóa bảo mật chuyên dụng. | 1 | 4 | **4 [Thấp]** | Trưởng nhóm Hạ tầng | Kích hoạt tính năng mã hóa phần cứng (LTO-9 hardware encryption) ngay khi tiến trình sao lưu bắt đầu. |
| **RSK-22** | SOC SIEM | Báo cáo sự cố sai thời gian do lệch múi giờ thiết bị. | Các máy chủ và thiết bị mạng không đồng bộ thời gian NTP. | 3 | 3 | **9 [T.Bình]** | Quản trị viên kiểm tra và cập nhật múi giờ thủ công. | 1 | 3 | **3 [Thấp]** | Quản lý SOC | Cấu hình trỏ dịch vụ thời gian của toàn bộ máy chủ và thiết bị mạng về hệ thống NTP Server nội bộ HA của ngân hàng. |
| **RSK-23** | Git Repository | Lập trình viên đẩy nhầm API key của T24 lên GitHub. | Lập trình viên push code dự án lên repo công cộng cá nhân. | 4 | 3 | **12 [Cao]** | Quy định cấm đẩy mã nguồn ngân hàng ra ngoài internet. | 1 | 3 | **3 [Thấp]** | Trưởng bộ phận Phát triển | Tích hợp công cụ quét nhạy cảm GitGuardian vào hệ thống GitLab để chặn commit chứa API key/mật khẩu. |
| **RSK-24** | Máy tính Lãnh đạo | Tin tặc giả mạo email CEO để yêu cầu chuyển tiền. | Chưa triển khai đầy đủ các giao thức bảo mật email (DMARC). | 3 | 4 | **12 [Cao]** | Sử dụng bộ lọc thư rác (Anti-spam) thông thường. | 1 | 4 | **4 [Thấp]** | Giám đốc ATTT (CISO) | Thiết lập chính sách DMARC (chế độ p=reject), SPF, DKIM; tổ chức diễn tập phishing giả định cho ban lãnh đạo hàng quý. |
| **RSK-25** | Thiết bị Đầu cuối | Laptop của thành viên Ban điều hành bị mất trộm. | Ổ cứng laptop không được mã hóa bảo mật. | 3 | 3 | **9 [T.Bình]** | Đặt mật khẩu đăng nhập hệ điều hành. | 1 | 3 | **3 [Thấp]** | Trưởng nhóm Hạ tầng | Kích hoạt mã hóa ổ cứng BitLocker bắt buộc trên 100% laptop làm việc của ban lãnh đạo và cán bộ nhân viên. |
| **RSK-26** | Internet Banking | Hệ thống bị treo do lượng giao dịch tăng đột biến. | Không thực hiện đánh giá năng lực tải hệ thống trước chiến dịch.| 4 | 3 | **12 [Cao]** | Giám sát hiệu năng CPU/RAM máy chủ ứng dụng thời gian thực. | 2 | 3 | **6 [T.Bình]** | Giám đốc Công nghệ | Tổ chức diễn tập tải giả lập (Load testing); triển khai cơ chế tự động mở rộng (Auto-scaling) trên hạ tầng máy chủ gateway. |
| **RSK-27** | SWIFT Gateway | Giao dịch viên chia sẻ tài khoản đăng nhập SWIFT. | Hệ thống cho phép đăng nhập đồng thời nhiều thiết bị. | 3 | 4 | **12 [Cao]** | Nội quy cấm chia sẻ tài khoản làm việc của ngân hàng. | 1 | 4 | **4 [Thấp]** | Trưởng khối Nguồn vốn | Cấu hình giới hạn phiên làm việc trên SWIFT client chỉ cho phép một kết nối hoạt động tại một thời điểm. |
| **RSK-28** | Hồ sơ Giấy | Rò rỉ thông tin vay vốn của khách hàng qua thùng rác. | Tài liệu in ấn hỏng không được hủy trước khi vứt bỏ. | 3 | 3 | **9 [T.Bình]** | Quy định yêu cầu nhân viên tự xé nhỏ giấy tờ trước khi bỏ rác. | 1 | 3 | **3 [Thấp]** | Trưởng bộ phận Thiết bị | Lắp đặt các thùng chứa giấy hủy có khóa tại các chi nhánh; ký hợp đồng định kỳ với đơn vị hủy tài liệu chuyên nghiệp. |
| **RSK-29** | Máy trạm Giao dịch | Khách hàng tự ý quẹt thẻ giao dịch khi nhân viên vắng mặt.| Giao dịch viên rời quầy nhưng không khóa máy tính. | 4 | 3 | **12 [Cao]** | Đào tạo nhân viên nội quy khóa máy trạm (Win + L) khi đứng dậy. | 2 | 3 | **6 [T.Bình]** | Giám đốc Khối Bán lẻ | Cấu hình chính sách GPO tự động khóa màn hình máy trạm sau tối đa 3 phút không phát sinh hoạt động. |
| **RSK-30** | Mobile Banking | Tin tặc quét (scrape) thông tin số dư tài khoản hàng loạt.| API Mobile Banking không giới hạn số lượng request đầu vào. | 4 | 3 | **12 [Cao]** | Cổng API Gateway cấu hình bảo mật tiêu chuẩn. | 2 | 3 | **6 [T.Bình]** | Trưởng khối Ngân hàng Số | Thiết lập cấu hình giới hạn tần suất gọi API (Rate limiting) và kích hoạt tính năng chống quét dữ liệu trên WAF. |
