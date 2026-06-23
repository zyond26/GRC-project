# 03. Ma trận Ánh xạ Tuân thủ

Tài liệu này trình bày chi tiết về các tiêu chuẩn quốc tế và quy định pháp lý Việt Nam áp dụng tại DieuBank (DB), tiếp theo là Ma trận Ánh xạ Tích hợp gồm **50 kiểm soát an ninh quan trọng** chia thành **9 miền kiểm soát** nhằm đảm bảo tính toàn diện và tuân thủ tuyệt đối.


## PHẦN 1: CHI TIẾT CÁC TIÊU CHUẨN & QUY ĐỊNH ÁP DỤNG

### 1. ISO/IEC 27001:2022, 27002:2022 & 27005:2022 (Tiêu chuẩn Quốc tế về An toàn Thông tin & Quản trị Rủi ro)
*   **ISO/IEC 27001:2022 (Hệ thống Quản lý An toàn Thông tin - ISMS)**:
    *   **Cấu trúc chính**: Gồm các điều khoản bắt buộc từ Điều 4 đến Điều 10 (Bối cảnh tổ chức, Lãnh đạo, Hoạch định, Hỗ trợ, Vận hành, Đánh giá hiệu năng, và Cải tiến).
    *   **Phụ lục A (Annex A)**: Được tái cấu trúc toàn diện vào năm 2022, giảm từ 114 kiểm soát xuống còn **93 kiểm soát**, được chia thành 4 miền chính:
        *   *A.5 Kiểm soát Tổ chức (Organizational Controls - 37 kiểm soát)*: Tập trung vào chính sách, vai trò trách nhiệm, phân tách nhiệm vụ, quản lý tài sản, và quan hệ với các bên liên quan.
        *   *A.6 Kiểm soát Nhân sự (People Controls - 8 kiểm soát)*: Tập trung vào thẩm định lý lịch, đào tạo nhận thức, quy trình kỷ luật, và bảo mật khi thôi việc.
        *   *A.7 Kiểm soát Vật lý (Physical Controls - 14 kiểm soát)*: Tập trung vào ranh giới an ninh, kiểm soát ra vào, hạ tầng kỹ thuật, và tiêu hủy thiết bị an toàn.
        *   *A.8 Kiểm soát Công nghệ (Technological Controls - 34 kiểm soát)*: Tập trung vào kiểm soát truy cập, mã hóa, phòng chống mã độc, quản lý lỗ hổng, sao lưu, và bảo mật mạng.
*   **ISO/IEC 27002:2022**: Cung cấp hướng dẫn triển khai chi tiết, các thực hành tốt nhất cho từng kiểm soát trong Phụ lục A của ISO 27001.
*   **ISO/IEC 27005:2022 (Quản lý Rủi ro An toàn Thông tin)**:
    *   Cung cấp khung hướng dẫn toàn diện để nhận diện, đánh giá, xử lý, và giám sát rủi ro ATTT.
    *   Các bước cốt lõi bao gồm: Thiết lập bối cảnh (Context Establishment), Đánh giá rủi ro (Risk Assessment - gồm Nhận diện, Phân tích, và Ước lượng rủi ro), Xử lý rủi ro (Risk Treatment), Chấp nhận rủi ro (Risk Acceptance), và Giám sát & Xem xét rủi ro định kỳ.

### 2. Thông tư 09/2020/TT-NHNN (Quy định An toàn Hệ thống Thông tin trong Hoạt động Ngân hàng)
*   **Mục đích**: Là văn bản pháp lý tối cao của Ngân hàng Nhà nước Việt Nam (NHNN) quy định về bảo đảm an toàn hệ thống thông tin đối với các tổ chức tín dụng và chi nhánh ngân hàng nước ngoài.
*   **Phân loại Cấp độ Hệ thống Thông tin**: Hệ thống thông tin (HTTT) của ngân hàng được phân thành 5 cấp độ (từ Cấp độ 1 đến Cấp độ 5) dựa trên quy mô, tính chất dữ liệu và mức độ ảnh hưởng khi xảy ra sự cố.
    *   *HTTT Cấp độ 3 trở lên*: Gồm các hệ thống cốt lõi như Core Banking, Core Card, hệ thống SWIFT, cổng thanh toán trực tuyến, dịch vụ ngân hàng điện tử (E-Banking).
*   **Các yêu cầu bắt buộc đối với HTTT Cấp độ 3 trở lên tại DieuBank**:
    *   **Phân tách nhiệm vụ (Điều 11)**: Phải tách biệt rõ ràng giữa bộ phận vận hành CNTT và bộ phận giám sát An toàn thông tin.
    *   **Giám sát ATTT (Điều 22)**: Bắt buộc thiết lập hệ thống giám sát an toàn thông tin tập trung hoạt động 24/7 (Trung tâm SOC) để phát hiện và ngăn chặn kịp thời các cuộc tấn công.
    *   **Kiểm toán ATTT độc lập (Điều 27)**: Phải thực hiện kiểm toán an toàn thông tin độc lập định kỳ tối thiểu 1 lần/năm bởi tổ chức kiểm toán độc lập bên ngoài hoặc bộ phận kiểm toán nội bộ có năng lực chuyên biệt.
    *   **Hoạt động liên tục & DR (Điều 25)**: Phải xây dựng kế hoạch đảm bảo hoạt động liên tục (BCP) và thiết lập trung tâm dữ liệu dự phòng (Disaster Recovery - DR Site) cách biệt địa lý, tổ chức diễn tập chuyển mạch khôi phục tối thiểu 1 lần/năm.

### 3. Nghị định 13/2023/NĐ-CP (Nghị định Bảo vệ Dữ liệu Cá nhân - PDPD)
*   **Hiệu lực**: Có hiệu lực thi hành từ ngày 01/07/2023, áp dụng cho mọi cơ quan, tổ chức, cá nhân tham gia vào hoạt động xử lý dữ liệu cá nhân tại Việt Nam.
*   **Phân loại Dữ liệu Cá nhân (Điều 3)**:
    *   *Dữ liệu cá nhân cơ bản*: Họ tên, ngày sinh, giới tính, nơi thường trú, số điện thoại, số CCCD/Hộ chiếu, email, quốc tịch...
    *   *Dữ liệu cá nhân nhạy cảm*: Thông tin liên quan trực tiếp đến quyền riêng tư cao, bao gồm: **Dữ liệu tài khoản ngân hàng**, **thông tin giao dịch thẻ tín dụng**, dữ liệu tài chính cá nhân, dữ liệu sinh trắc học (vân tay, nhận diện khuôn mặt), dữ liệu vị trí thực tế, và lịch sử y tế.
*   **Quyền của Chủ thể Dữ liệu (Điều 9)**: Gồm **11 quyền cốt lõi** mà DieuBank phải hỗ trợ kỹ thuật và quy trình để khách hàng thực hiện:
    *   Quyền được biết; Quyền đồng ý; Quyền truy cập; Quyền rút lại sự đồng ý; Quyền xóa dữ liệu; Quyền hạn chế xử lý; Quyền cung cấp dữ liệu; Quyền phản đối xử lý; Quyền khiếu nại, tố cáo, khởi kiện; Quyền yêu cầu bồi thường thiệt hại; Quyền tự bảo vệ.
*   **Các nghĩa vụ trọng yếu của DieuBank**:
    *   **Thiết lập tổ chức DPO (Điều 28)**: Bắt buộc chỉ định nhân sự chuyên trách bảo vệ dữ liệu cá nhân (Data Protection Officer - DPO) và thành lập bộ phận bảo vệ dữ liệu cá nhân nội bộ.
    *   **Hồ sơ Đánh giá Tác động (DPIA - Điều 38)**: Phải lập và lưu giữ Hồ sơ đánh giá tác động xử lý dữ liệu cá nhân (DPIA) theo Mẫu số 02 của Nghị định và gửi về Cục An ninh mạng và Phòng chống tội phạm sử dụng công nghệ cao (A05) - Bộ Công an trong vòng 60 ngày kể từ ngày bắt đầu xử lý.
    *   **Đồng ý tự nguyện**: Mọi hoạt động thu thập, xử lý dữ liệu cá nhân phải dựa trên sự đồng ý rõ ràng, tự nguyện, và có thể rút lại của chủ thể dữ liệu (trừ một số trường hợp đặc biệt do luật định).

### 4. Luật An ninh mạng 2018 (An toàn và An ninh Không gian mạng Quốc gia)
*   **Mục đích**: Bảo vệ an ninh quốc gia, trật tự an toàn xã hội trên không gian mạng và phòng chống các nguy cơ tấn công mạng đối với hệ thống thông tin quan trọng của đất nước.
*   **Lưu trữ dữ liệu tại Việt Nam (Điều 26)**:
    *   Quy định các doanh nghiệp trong và ngoài nước cung cấp dịch vụ trên mạng viễn thông, mạng Internet tại Việt Nam có hoạt động thu thập, khai thác, phân tích, xử lý dữ liệu về thông tin cá nhân, dữ liệu về mối quan hệ của người sử dụng dịch vụ, dữ liệu do người sử dụng dịch vụ tại Việt Nam tạo ra **phải lưu trữ dữ liệu này tại Việt Nam** trong thời hạn quy định.
*   **Bảo vệ Hệ thống Thông tin Quan trọng (Điều 27)**:
    *   DieuBank thuộc nhóm đối tượng vận hành hệ thống thông tin quan trọng phục vụ hoạt động tài chính - tiền tệ quốc gia, do đó phải áp dụng các biện pháp kỹ thuật giám sát an ninh mạng nghiêm ngặt từ cơ quan chuyên trách (A05 - Bộ Công an, Bộ Thông tin & Truyền thông).
    *   **Nghĩa vụ báo cáo sự cố (Điều 9)**: Khi phát hiện sự cố an ninh mạng nghiêm trọng hoặc hành vi xâm phạm an ninh mạng, ngân hàng phải báo cáo ngay trong vòng **24 giờ** cho lực lượng chuyên trách bảo vệ an ninh mạng.

---

## PHẦN 2: MA TRẬN ÁNH XẠ KIỂM SOÁT TÍCH HỢP (50 KIỂM SOÁT)

Dưới đây là bảng ánh xạ chi tiết 50 kiểm soát an ninh tích hợp của DieuBank:

---


## Miền 1: Chính sách An ninh & Quản trị (Kiểm soát 1-4)

| Mã Kiểm soát & Chi tiết ISO 27001 | Hướng dẫn ISO 27002 | Kịch bản Rủi ro ISO 27005 | Thông tư 09/2020 | Nghị định 13/2023 | Luật An ninh mạng 2018 | Bằng chứng Kiểm toán Yêu cầu | Chủ sở hữu |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Chính sách An ninh** (A.5.1) | Định nghĩa và xem xét chính sách định kỳ hàng năm. | Chính sách không phê duyệt dẫn đến áp dụng kiểm soát không nhất quán. | Điều 10 (Chính sách ATTT) | Điều 26 (Chính sách bảo vệ dữ liệu cá nhân) | N/A | - Chính sách ISP cấp độ 1 đã ký<br>- Biên bản họp xem xét hàng năm | CISO |
| **2. Vai trò & Trách nhiệm** (A.5.2) | Xác định và phân bổ các vai trò, trách nhiệm an ninh. | Sự mơ hồ trong sở hữu dẫn đến lỗ hổng không được vá. | Điều 11 (Tổ chức ATTT) | Điều 28 (Bổ nhiệm DPO chuyên trách) | Điều 27 (Nhân sự điều phối an ninh mạng) | - Sơ đồ tổ chức an ninh thông tin<br>- Mô tả công việc của CISO/DPO | CRO |
| **3. Phân tách Nhiệm vụ** (A.5.3) | Phân tách các công việc có thể gây xung đột (dev và prod). | Lập trình viên sửa mã nguồn sản xuất để trục lợi/gian lận. | Điều 11 (Phân tách giữa Vận hành IT & ATTT) | N/A | N/A | - Cấu hình nhóm phân quyền Active Directory<br>- Lịch sử phê duyệt thay đổi | CIO |
| **4. Liên hệ Cơ quan chức năng** (A.5.4) | Thiết lập kênh liên lạc với cơ quan chính phủ và địa phương. | Báo cáo sự cố rò rỉ chậm trễ dẫn đến xử phạt hành chính lớn. | Điều 24 (Báo cáo sự cố lên NHNN) | Điều 28 (Báo cáo sự cố dữ liệu về Bộ Công an) | Điều 9 (Thông báo sự cố an ninh mạng) | - Quy trình báo cáo sự cố (SOP)<br>- Danh sách liên hệ NHNN, Bộ Công an (A05) | Trưởng ban Pháp chế & Tuân thủ |

---

## Miền 2: An ninh Nhân sự & Nhận thức (Kiểm soát 5-10)

| Mã Kiểm soát & Chi tiết ISO 27001 | Hướng dẫn ISO 27002 | Kịch bản Rủi ro ISO 27005 | Thông tư 09/2020 | Nghị định 13/2023 | Luật An ninh mạng 2018 | Bằng chứng Kiểm toán Yêu cầu | Chủ sở hữu |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **5. Thẩm định Nhân sự** (A.6.1) | Thực hiện kiểm tra lý lịch nhân viên và nhà thầu. | Nhân viên mới có lịch sử đánh cắp dữ liệu phá hoại hệ thống. | Điều 13 (Tuyển dụng và thẩm định lý lịch) | N/A | N/A | - Hồ sơ thẩm định lý lịch đã hoàn thành<br>- Bản thỏa thuận NDA đã ký | Trưởng khối Nhân sự |
| **6. Đào tạo Nhận thức** (A.6.3) | Cung cấp đào tạo an ninh thông tin định kỳ cho nhân viên. | Nhân viên click link lừa đảo, dẫn đến nhiễm mã độc tống tiền. | Điều 13 (Đào tạo nâng cao nhận thức hàng năm) | Điều 26 (Đào tạo nội bộ về quyền riêng tư) | N/A | - Log danh sách hoàn thành đào tạo<br>- Báo cáo kết quả diễn tập phishing | CISO |
| **7. Quy trình Kỷ luật** (A.6.4) | Thiết lập quy trình kỷ luật chính thức khi vi phạm chính sách. | Nhân viên bỏ qua các kiểm soát an ninh vì không có chế tài. | Điều 13 (Quy định chế tài xử phạt) | N/A | N/A | - Chính sách kỷ luật của HR<br>- Biên bản xử lý vi phạm đã ký | Trưởng khối Nhân sự |
| **8. Quản lý Rời mạng** (A.6.5) | Xác định quy trình thu hồi tài sản và vô hiệu hóa tài khoản. | Quản trị viên nghỉ việc vẫn giữ tài khoản VPN hoạt động. | Điều 13 (Thủ tục bàn giao và chấm dứt) | N/A | N/A | - Checklist bàn giao thôi việc đã ký<br>- Log khóa tài khoản Active Directory | Trưởng khối Nhân sự |
| **9. Thỏa thuận Bảo mật** (A.6.6) | Yêu cầu ký cam kết NDA đối với nhân viên và nhà cung cấp. | Nhà cung cấp rò rỉ sơ đồ kiến trúc mạng nội bộ ngân hàng. | Điều 30 (Thỏa thuận an ninh với nhà thầu) | Điều 26 (Cam kết bảo mật dữ liệu khách hàng) | N/A | - Hợp đồng lao động kèm NDA<br>- Thỏa thuận bảo mật với đối tác | Trưởng ban Pháp chế & Tuân thủ |
| **10. Làm việc Từ xa** (A.6.7) | Bảo mật các kết nối làm việc từ xa và thiết bị đầu cuối. | Tin tặc chặn kết nối làm việc qua mạng Wi-Fi công cộng. | Điều 16 (An toàn kết nối từ xa) | N/A | N/A | - Cấu hình máy chủ VPN & chính sách MDM | Trưởng nhóm Hạ tầng CNTT |

---

## Miền 3: Quản lý & Phân loại Tài sản (Kiểm soát 11-16)

| Mã Kiểm soát & Chi tiết ISO 27001 | Hướng dẫn ISO 27002 | Kịch bản Rủi ro ISO 27005 | Thông tư 09/2020 | Nghị định 13/2023 | Luật An ninh mạng 2018 | Bằng chứng Kiểm toán Yêu cầu | Chủ sở hữu |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **11. Danh mục Tài sản** (A.5.9) | Duy trì danh mục tài sản thông tin và tài sản vật lý. | Các hệ thống "Shadow IT" không được vá lỗ hổng bảo mật. | Điều 14 (Danh mục tài sản CNTT) | N/A | N/A | - Sổ đăng ký tài sản (Asset Register)<br>- Ảnh chụp màn hình CMDB | Trưởng nhóm Hạ tầng CNTT |
| **12. Sử dụng Hợp lệ** (A.5.10) | Định nghĩa quy tắc sử dụng tài nguyên CNTT của ngân hàng. | Nhân viên tải mã độc qua hòm thư cá nhân trên máy trạm. | Điều 13 (Quy định sử dụng tài nguyên) | N/A | N/A | - Bản cam kết Tuân thủ Quy định sử dụng (AUP) | CISO |
| **13. Phân loại Thông tin** (A.5.12) | Phân loại dữ liệu dựa trên mức độ nhạy cảm và tác động. | Dữ liệu PII của khách hàng lưu giữ trên thư mục chia sẻ không bảo mật. | Điều 14 (Phân loại cấp độ hệ thống) | Điều 3 (Dữ liệu cá nhân cơ bản và nhạy cảm) | N/A | - Tiêu chuẩn Phân loại Dữ liệu ngân hàng | DPO / Quản lý Rủi ro |
| **14. Dán nhãn Thông tin** (A.5.13) | Áp dụng nhãn dán siêu dữ liệu (metadata) cho các tệp mật. | Tài liệu giới hạn bị in ra và để quên tại khu vực công cộng. | Điều 14 (Dán nhãn phân loại tài sản) | Điều 26 (Đánh dấu nhãn dữ liệu bảo vệ) | N/A | - Cấu hình chính sách Microsoft Purview | CISO |
| **15. Sở hữu Tài sản** (A.5.11) | Chỉ định chủ sở hữu cho tất cả các tài sản thông tin. | Máy chủ không có người quản lý bị bỏ quên không vá lỗi 12 tháng. | Điều 14 (Trách nhiệm quản lý tài sản) | N/A | N/A | - Trường thông tin Owner trong CMDB / Asset Register | Quản lý Rủi ro CNTT |
| **16. Truyền tải Thông tin** (A.5.14) | Bảo mật truyền dữ liệu qua kênh mã hóa (SFTP/TLS). | Bản sao lưu cơ sở dữ liệu khách hàng bị đánh cắp trên đường truyền. | Điều 18 (An toàn truyền tải dữ liệu) | Điều 38 (Hồ sơ DPIA chuyển dữ liệu ra nước ngoài) | Điều 26 (Tuân thủ lưu trữ dữ liệu tại Việt Nam) | - Cấu hình SFTP/TLS<br>- Thỏa thuận truyền nhận dữ liệu | CISO / DPO |

---

## Miền 4: Kiểm soát Truy cập & Định danh (Kiểm soát 17-24)

| Mã Kiểm soát & Chi tiết ISO 27001 | Hướng dẫn ISO 27002 | Kịch bản Rủi ro ISO 27005 | Thông tư 09/2020 | Nghị định 13/2023 | Luật An ninh mạng 2018 | Bằng chứng Kiểm toán Yêu cầu | Chủ sở hữu |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **17. Chính sách Truy cập** (A.5.15) | Thực thi quyền hạn tối thiểu và cần biết mới biết. | Giao dịch viên xem hồ sơ tín dụng của khách hàng VIP không lý do. | Điều 16 (Quản lý truy cập) | Điều 26 (Giới hạn quyền truy cập dữ liệu PII) | N/A | - Chính sách Kiểm soát Truy cập (Access Control Policy) | CISO |
| **18. Quản lý Định danh** (A.5.16) | Đảm bảo định danh duy nhất cho người dùng và hệ thống. | Sử dụng tài khoản dùng chung khiến không thể truy vết khi xảy ra sự cố. | Điều 16 (Tài khoản người dùng duy nhất) | N/A | N/A | - Danh sách tài khoản AD cho thấy không có tài khoản dùng chung | Trưởng nhóm Hạ tầng CNTT |
| **19. Truy cập Đặc quyền** (A.5.18) | Giới hạn và giám sát tài khoản quản trị viên (PAM). | Quản trị viên lạm dụng quyền truy vấn trực tiếp DB khách hàng. | Điều 16 (Tài khoản đặc quyền) | Điều 26 (Log truy cập dữ liệu nhạy cảm) | N/A | - Báo cáo hoạt động từ hệ thống PAM (CyberArk)<br>- Mẫu log ghi hình phiên làm việc | CISO |
| **20. Soát xét Quyền** (A.5.17) | Thực hiện soát xét định kỳ hàng quý quyền truy cập người dùng. | Nhân viên chuyển phòng ban vẫn giữ quyền truy cập cũ. | Điều 16 (Soát xét định kỳ quyền hạn) | N/A | N/A | - Biên bản xác nhận Soát xét Quyền truy cập định kỳ Q1/Q2 | Quản lý Rủi ro CNTT |
| **21. Độ mạnh Mật khẩu** (A.8.2) | Yêu cầu độ mạnh mật khẩu và chặn việc sử dụng lại mật khẩu cũ. | Tin tặc tấn công brute-force thành công vào tài khoản admin mật khẩu yếu. | Điều 16 (Tiêu chuẩn mật khẩu) | N/A | N/A | - Cấu hình Group Policy (GPO) trong Active Directory | Trưởng nhóm Hạ tầng CNTT |
| **22. Xác thực Đa yếu tố** (A.8.5) | Bắt buộc sử dụng MFA cho kết nối từ xa và đặc quyền. | Lộ mật khẩu dẫn đến hệ thống bị đăng nhập từ bên ngoài. | Điều 16 (MFA đối với truy cập từ xa) | Điều 26 (MFA đối với hệ thống chứa PII) | N/A | - Ảnh cấu hình chính sách Entra ID MFA | Trưởng nhóm Hạ tầng CNTT |
| **23. Thời gian Chờ** (A.8.2) | Triển khai tự động khóa màn hình và hết hạn phiên làm việc. | Giao dịch viên rời bàn làm việc, khách hàng tự ý thao tác trên máy trạm. | Điều 16 (Tiêu chuẩn tự động khóa màn hình) | N/A | N/A | - Cấu hình thời gian khóa màn hình trong GPO | Trưởng nhóm Hạ tầng CNTT |
| **24. Truy cập Mã nguồn** (A.8.4) | Hạn chế lập trình viên truy cập vào các kho mã nguồn sản xuất. | Lập trình viên tự ý sửa mã nguồn để bypass kiểm soát gian lận. | Điều 16 (Giới hạn truy cập mã nguồn) | N/A | N/A | - Phân quyền trong GitLab, danh sách khóa SSH | Trưởng bộ phận Phát triển |

---

## Miền 5: Mã hóa & Quản lý Khóa (Kiểm soát 25-27)

| Mã Kiểm soát & Chi tiết ISO 27001 | Hướng dẫn ISO 27002 | Kịch bản Rủi ro ISO 27005 | Thông tư 09/2020 | Nghị định 13/2023 | Luật An ninh mạng 2018 | Bằng chứng Kiểm toán Yêu cầu | Chủ sở hữu |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **25. Chính sách Mã hóa** (A.8.24) | Xác định thuật toán và độ dài khóa (AES-256, TLS 1.3). | Thuật toán cũ bị bẻ khóa, làm lộ lọt dữ liệu giao dịch. | Điều 18 (Quy định mã hóa dữ liệu) | Điều 26 (Yêu cầu mã hóa bảo vệ dữ liệu PII) | N/A | - Chính sách Mã hóa<br>- Log cấu hình cipher suite trên máy chủ | CISO |
| **26. Quản lý Khóa** (A.8.24) | Lưu trữ khóa mật mã an toàn trong HSM/KMS. | Khóa mã hóa cứng trong file cấu hình bị rò rỉ. | Điều 18 (Yêu cầu sử dụng HSM) | Điều 26 (Bảo vệ khóa bí mật xử lý dữ liệu) | N/A | - Lịch trình xoay vòng khóa<br>- Log kiểm toán hoạt động HSM | Trưởng nhóm Hạ tầng CNTT |
| **27. Truyền thông An toàn** (A.5.14) | Mã hóa dữ liệu truyền tải trên mạng công cộng. | Mật khẩu dạng text trần bị đánh cắp bằng kỹ thuật nghe lén gói tin. | Điều 18 (Yêu cầu mã hóa đường truyền) | Điều 26 (Mã hóa dữ liệu trong quá trình gửi nhận) | N/A | - Báo cáo đánh giá SSL Labs<br>- Cấu hình thiết bị mạng | Trưởng nhóm Mạng |

---

## Miền 6: An toàn Vật lý & Môi trường (Kiểm soát 28-34)

| Mã Kiểm soát & Chi tiết ISO 27001 | Hướng dẫn ISO 27002 | Kịch bản Rủi ro ISO 27005 | Thông tư 09/2020 | Nghị định 13/2023 | Luật An ninh mạng 2018 | Bằng chứng Kiểm toán Yêu cầu | Chủ sở hữu |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **28. Ranh giới Vật lý** (A.7.1) | Xác định ranh giới vật lý an toàn cho hệ thống CNTT. | Kẻ gian xâm nhập vào phòng máy chủ mà không bị phát hiện. | Điều 20 (Ranh giới an toàn DC) | N/A | Điều 27 (An toàn vật lý nút mạng quan trọng) | - Bản vẽ mặt bằng Data Center<br>- Log quẹt thẻ ra vào | Trưởng bộ phận Hạ tầng Cơ sở |
| **29. Kiểm soát Ra vào** (A.7.2) | Giới hạn quyền ra vào bằng thẻ từ/sinh trắc học. | Cựu nhân viên sử dụng thẻ chưa bị thu hồi để vào Data Center. | Điều 20 (Ra vào bằng sinh trắc học) | N/A | Điều 27 (Giới hạn tiếp cận vật lý) | - Log hệ thống kiểm soát cửa từ<br>- Sổ đăng ký khách ra vào | Trưởng bộ phận Hạ tầng Cơ sở |
| **30. Vị trí Thiết bị** (A.7.3) | Bố trí thiết bị để giảm thiểu rủi ro từ môi trường. | Đường ống nước chạy trực tiếp phía trên tủ rack máy chủ core. | Điều 20 (Vị trí phòng máy chủ) | N/A | N/A | - Báo cáo khảo sát thực địa phòng máy chủ | Trưởng nhóm Hạ tầng CNTT |
| **31. Hạ tầng Tiện ích** (A.7.4) | Bảo vệ hệ thống khỏi sự cố mất điện (UPS/Generator). | Mất điện lưới đột ngột gây hỏng hóc vật lý và lỗi DB. | Điều 20 (Hệ thống nguồn điện dự phòng) | N/A | N/A | - Biên bản kiểm tra UPS định kỳ<br>- Log chạy thử máy phát điện | Trưởng bộ phận Hạ tầng Cơ sở |
| **32. An toàn Cáp dẫn** (A.7.5) | Bảo vệ cáp nguồn và cáp viễn thông khỏi hư hại. | Cáp quang chính kết nối ngân hàng bị máy xúc cắt đứt. | Điều 20 (Ống bảo vệ cáp) | N/A | N/A | - Ảnh chụp thực tế ống bọc bảo vệ cáp và sơ đồ đi cáp | Trưởng nhóm Mạng |
| **33. Phương tiện Lưu trữ** (A.7.6) | Lưu trữ băng từ sao lưu trong két chống cháy chuyên dụng. | Băng từ sao lưu chứa PII bị đánh cắp khỏi ngăn kéo văn phòng. | Điều 14 (An toàn phương tiện lưu trữ) | Điều 26 (An toàn phương tiện sao lưu) | N/A | - Danh mục lưu trữ ngoài DC (offsite)<br>- Nhật ký mở két sắt | Trưởng nhóm Hạ tầng CNTT |
| **34. Tiêu hủy An toàn** (A.7.10) | Hủy hoặc ghi đè phương tiện lưu trữ trước khi thanh lý. | Ổ cứng thanh lý chứa dữ liệu giao dịch khách hàng dạng rõ. | Điều 14 (Tiêu hủy ổ cứng hỏng) | Điều 16 (Xóa bỏ dữ liệu cá nhân hoàn toàn) | N/A | - Biên bản tiêu hủy thiết bị lưu trữ kèm chứng nhận bên thứ 3 | Trưởng nhóm Hạ tầng CNTT |

---

## Miền 7: An toàn Vận hành & Mạng (Kiểm soát 35-42)

| Mã Kiểm soát & Chi tiết ISO 27001 | Hướng dẫn ISO 27002 | Kịch bản Rủi ro ISO 27005 | Thông tư 09/2020 | Nghị định 13/2023 | Luật An ninh mạng 2018 | Bằng chứng Kiểm toán Yêu cầu | Chủ sở hữu |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **35. Quản lý Thay đổi** (A.8.1) | Xem xét, phê duyệt và thử nghiệm mọi thay đổi hệ thống. | Bản vá chưa thử nghiệm làm treo hệ thống cơ sở dữ liệu Core. | Điều 19 (Quản lý thay đổi hệ thống) | N/A | N/A | - Biên bản họp Hội đồng Thay đổi (CAB)<br>- Log phê duyệt ticket Jira | CIO |
| **36. Sao lưu Dữ liệu** (A.8.7) | Duy trì các bản sao lưu an toàn, mã hóa và cách ly (offline). | Mã độc tống tiền mã hóa toàn bộ dữ liệu sao lưu trực tuyến. | Điều 19 (Kiểm tra phục hồi sao lưu) | Điều 26 (Khôi phục dữ liệu PII khi gặp sự cố) | N/A | - Log sao lưu hàng đêm thành công<br>- Báo cáo diễn tập phục hồi DR | Trưởng nhóm Hạ tầng CNTT |
| **37. Phòng chống Mã độc** (A.8.8) | Triển khai giải pháp Antivirus/EDR trên máy trạm và máy chủ. | Mã độc lây lan nhanh chóng qua mạng LAN giữa các chi nhánh. | Điều 19 (Phòng chống mã độc tống tiền) | N/A | N/A | - Báo cáo trạng thái từ bảng quản trị EDR (CrowdStrike) | CISO / Quản lý SOC |
| **38. Quản lý Lỗ hổng** (A.8.9) | Quét lỗ hổng định kỳ và vá lỗi các tài sản quan trọng. | Kẻ tấn công khai thác lỗ hổng đã công bố trên cổng web dịch vụ. | Điều 19 (Khắc phục lỗ hổng an ninh) | N/A | Điều 27 (Kiểm tra rà quét an ninh mạng) | - Báo cáo quét lỗ hổng từ Tenable<br>- Lịch sử cài đặt bản vá | CISO |
| **39. Quản lý Nhật ký** (A.8.19) | Ghi nhận nhật ký sự cố an ninh và lưu giữ log hệ thống. | Thiếu log hệ thống dẫn đến không thể điều tra nguồn gốc rò rỉ dữ liệu. | Điều 22 (Lưu trữ nhật ký vận hành) | Điều 26 (Lưu giữ log hoạt động xử lý dữ liệu) | N/A | - Trạng thái cấu hình đẩy log về SIEM<br>- Quy định thời gian lưu trữ | Quản lý SOC |
| **40. Giám sát An ninh** (A.8.20) | Giám sát các hành vi bất thường trên hệ thống theo thời gian thực. | Kẻ tấn công thực hiện truy vấn trích xuất dữ liệu mà không bị phát hiện. | Điều 22 (Hoạt động giám sát của SOC) | N/A | Điều 27 (Giám sát hệ thống thông tin) | - Bảng điều khiển giám sát SIEM<br>- Quy trình xử lý cảnh báo | Quản lý SOC |
| **41. Phân vùng Mạng** (A.8.21) | Phân vùng mạng độc lập (DMZ, Mạng nội bộ, DB, SWIFT). | Máy chủ Web ở vùng DMZ bị hack có thể kết nối thẳng đến Database lõi. | Điều 21 (Phân vùng mạng an toàn) | N/A | Điều 27 (Bảo vệ phân vùng mạng hệ thống lõi) | - Cấu hình luật tường lửa (Firewall rules)<br>- Sơ đồ kiến trúc mạng | Trưởng nhóm Mạng |
| **42. An toàn Ứng dụng Web** (A.8.22) | Bảo vệ cổng thông tin bằng tường lửa WAF và lập trình an toàn. | Lỗi SQL Injection trên ứng dụng web làm rò rỉ bảng mật khẩu. | Điều 19 (An toàn trong phát triển ứng dụng) | N/A | N/A | - Báo cáo chặn sự cố từ WAF<br>- Kết quả quét mã nguồn SAST/DAST | Trưởng bộ phận Phát triển |

---

## Miền 8: Quản lý Sự cố & Giám sát (Kiểm soát 43-47)

| Mã Kiểm soát & Chi tiết ISO 27001 | Hướng dẫn ISO 27002 | Kịch bản Rủi ro ISO 27005 | Thông tư 09/2020 | Nghị định 13/2023 | Luật An ninh mạng 2018 | Bằng chứng Kiểm toán Yêu cầu | Chủ sở hữu |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **43. Sự cố An toàn TT** (A.5.24) | Định nghĩa trách nhiệm và quy trình ứng phó sự cố an ninh. | Cuộc tấn công mạng diễn ra mà không có đội ngũ xử lý chuyên nghiệp. | Điều 24 (Quy trình ứng phó sự cố) | Điều 26 (Biện pháp giảm thiểu rủi ro sự cố dữ liệu) | Điều 9 (Phương án ứng phó sự cố an ninh mạng) | - Chính sách/Quy trình ứng phó sự cố (IRP)<br>- Báo cáo diễn tập sự cố | CISO |
| **44. Báo cáo Sự kiện** (A.6.8) | Cung cấp kênh báo cáo sự kiện nghi ngờ an toàn thông tin. | Nhân viên phát hiện email lừa đảo nhưng không báo cáo, tự ý click. | Điều 13 (Quy định báo cáo điểm yếu) | N/A | N/A | - Log nút báo cáo email lừa đảo trên Outlook<br>- Ticket hỗ trợ | CISO |
| **45. Đánh giá & Quyết định** (A.5.25) | Đánh giá tính chất sự kiện để xác định mức độ sự cố. | Cảnh báo giả làm nghẽn vận hành, trong khi sự cố thật bị bỏ qua. | Điều 24 (Phân loại cấp độ sự cố) | N/A | N/A | - Tiêu chuẩn phân loại sự cố<br>- Nhật ký ghi nhận sự cố | CISO |
| **46. Rút bài học Sự cố** (A.5.28) | Họp xem xét sau sự cố để tìm nguyên nhân gốc rễ và cải thiện. | Lỗ hổng cũ tiếp tục bị khai thác lại do thiếu đánh giá sau sự cố. | Điều 24 (Báo cáo đánh giá nguyên nhân) | N/A | N/A | - Báo cáo Post-Incident Review (PIR) cho các sự cố lớn | CISO |
| **47. Thu thập Chứng cứ** (A.8.16) | Đảm bảo tính toàn vẹn của bằng chứng số phục vụ điều tra. | File log bị xóa/sửa đổi khiến không thể phục vụ việc truy tố trước pháp luật. | Điều 24 (Thu thập và phân tích dữ liệu lỗi) | N/A | N/A | - Quy trình niêm phong thiết bị vật lý<br>- Mã băm (Hash digest) file log | CISO |

---

## Miền 9: Liên tục Kinh doanh & DRP (Kiểm soát 48-50)

| Mã Kiểm soát & Chi tiết ISO 27001 | Hướng dẫn ISO 27002 | Kịch bản Rủi ro ISO 27005 | Thông tư 09/2020 | Nghị định 13/2023 | Luật An ninh mạng 2018 | Bằng chứng Kiểm toán Yêu cầu | Chủ sở hữu |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **48. BCP sẵn sàng** (A.5.29) | Xây dựng và duy trì các Kế hoạch Liên tục Kinh doanh (BCP). | Mất điện diện rộng tại khu vực miền Nam làm ngưng trệ giao dịch. | Điều 25 (Phương án đảm bảo hoạt động liên tục) | N/A | N/A | - Tài liệu kế hoạch BCP của Core Banking<br>- Nhật ký gọi thử nghiệm sơ đồ liên lạc | CIO |
| **49. Tính sẵn sàng DRP** (A.5.30) | Xây dựng cơ sở hạ tầng phòng thảm họa (Data Center dự phòng). | Phòng máy chủ chính bị hỏng hoàn toàn nhưng site dự phòng DR không thể khởi động. | Điều 25 (Yêu cầu thiết lập site dự phòng) | N/A | N/A | - Kế hoạch thử nghiệm DRP<br>- Nhật ký thực tế diễn tập chuyển mạch | CIO |
| **50. Dự phòng Thiết bị** (A.8.14) | Triển khai thiết bị dự phòng (High Availability - HA). | Một thiết bị tường lửa hỏng làm mất kết nối toàn bộ hệ thống ngân hàng. | Điều 21 (Đường truyền và thiết bị dự phòng) | N/A | N/A | - Cấu hình cluster hoạt động song song (Active-Active)<br>- Log định tuyến BGP | Trưởng nhóm Mạng |
