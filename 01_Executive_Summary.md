# 01. Tóm tắt Dự án & Điều lệ

## 1. Điều lệ Dự án (Project Charter)

| Thuộc tính Dự án | Chi tiết Dự án |
| :--- | :--- |
| **Tên Dự án** | Khung Tuân thủ IT GRC Tích hợp cho Ngân hàng Thương mại Cổ phần DieuBank (DB) |
| **Nhà tài trợ Dự án** | Hội đồng Quản trị (HĐQT) & Tổng Giám đốc (CEO) |
| **Ủy ban Chỉ đạo** | Giám đốc Quản trị Rủi ro (CRO), Giám đốc Công nghệ (CIO), Trưởng bộ phận Pháp chế & Tuân thủ |
| **Trưởng chương trình** | Giám đốc Quản lý Rủi ro CNTT & Tuân thủ / CISO |
| **Tiêu chuẩn hướng tới** | ISO/IEC 27001:2022, ISO/IEC 27002:2022, ISO/IEC 27005:2022 |
| **Luật & Quy định** | Thông tư 09/2020/TT-NHNN (NHNN), Nghị định 13/2023/NĐ-CP (PDPD), Luật An ninh mạng 2018 |
| **Ngày có hiệu lực** | Ngày 16 tháng 06 năm 2026 |
| **Phiên bản Tài liệu** | v1.0 (Bản hoàn thiện) |


## 2. Trường hợp Kinh doanh (Business Case)

Ngân hàng Thương mại Cổ phần DieuBank (DB) đang mở rộng quy mô ngân hàng số, trong đó các giao dịch qua Mobile Banking và Internet Banking chiếm hơn 75% tổng khối lượng giao dịch bán lẻ. Sự chuyển dịch này mang lại sự tăng trưởng khách hàng và doanh thu vượt trội, nhưng đồng thời cũng làm tăng theo cấp số nhân bề mặt tấn công và phơi bày ngân hàng trước các rủi ro về mặt pháp lý, vận hành và an ninh mạng.

Theo các quy định pháp luật hiện hành của Ngân hàng Nhà nước Việt Nam (NHNN) và Chính phủ Việt Nam, DieuBank đối mặt với các mức phạt và chế tài nghiêm khắc nếu vi phạm:
1.  **Thông tư 09/2020/TT-NHNN**: Bắt buộc phải phân loại cấp độ an toàn hệ thống thông tin (Cấp độ 1 đến 5), kiểm soát truy cập nghiêm ngặt và kiểm toán độc lập định kỳ hàng năm. Việc không tuân thủ có thể dẫn đến hạn chế hoạt động hoặc đình chỉ giấy phép cung cấp dịch vụ ngân hàng số.
2.  **Nghị định 13/2023/NĐ-CP về Bảo vệ Dữ liệu Cá nhân (PDPD)**: Quy định trách nhiệm và nghĩa vụ bảo vệ dữ liệu cá nhân của khách hàng. Vi phạm có thể bị phạt tới 5% tổng doanh thu năm trước đó, bị đình chỉ các hoạt động xử lý dữ liệu và gây tổn hại nghiêm trọng đến uy tín thương hiệu.
3.  **Luật An ninh mạng 2018**: Yêu cầu lưu trữ dữ liệu tại Việt Nam (data localization), bảo vệ cơ sở hạ tầng thông tin trọng yếu và báo cáo sự cố an ninh mạng trong vòng 24 giờ cho Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao (A05) và NHNN.

Dự án này, **Khung Tuân thủ IT GRC Tích hợp**, thiết lập một cấu trúc quản trị thống nhất giúp loại bỏ sự trùng lặp trong việc kiểm tra kiểm soát, ánh xạ các yêu cầu chung, thực hiện vòng đời quản lý rủi ro dựa trên ISO 27005 và đảm bảo sự tuân thủ tuyệt đối với cả các thông lệ quốc tế và pháp luật Việt Nam.


## 3. Mục tiêu Dự án

*   **Mục tiêu 1: Tuân thủ Pháp lý**: Đạt tỷ lệ tuân thủ 100% đối với Thông tư 09/2020/TT-NHNN, Nghị định 13/2023/NĐ-CP và Luật An ninh mạng 2018.
*   **Mục tiêu 2: Sẵn sàng Chứng nhận ISO 27001:2022**: Triển khai tất cả các điều khoản bắt buộc và các biện pháp kiểm soát Phụ lục A để DieuBank sẵn sàng cho việc đánh giá chứng nhận ISO 27001 trong vòng 12 tháng tới.
*   **Mục tiêu 3: Quản trị Rủi ro Chủ động**: Thiết lập quy trình quản lý rủi ro công nghệ theo tiêu chuẩn ISO 27005:2022, thay thế việc quản lý an ninh phản ứng thụ động bằng các quyết định dựa trên khẩu vị rủi ro đã được phê duyệt.
*   **Mục tiêu 4: Khả năng Phục hồi Vận hành**: Triển khai các tiêu chuẩn Kế hoạch Liên tục Kinh doanh (BCP) và Kế hoạch Phục hồi sau Thảm họa (DRP) để đảm bảo tính sẵn sàng cao cho các dịch vụ cốt lõi phục vụ khách hàng.
*   **Mục tiêu 5: Xây dựng Văn hóa Tuân thủ**: Nâng cao nhận thức về an ninh mạng, bảo vệ quyền riêng tư dữ liệu trên toàn bộ các đơn vị kinh doanh và vận hành (Tuyến phòng thủ thứ 1).


## 4. Phạm vi Dự án

Phạm vi của chương trình GRC này bao gồm toàn bộ hệ sinh thái CNTT và An toàn thông tin của DieuBank (DB):

### Hệ thống & Đơn vị thuộc Phạm vi (In-Scope)
*   **Hệ thống Core Banking**: Cơ sở dữ liệu Temenos T24 (Release R22), máy chủ ứng dụng và các hệ thống trung gian (middleware).
*   **Kênh số**: Cổng thông tin Internet Banking và Ứng dụng di động Mobile Banking (iOS/Android).
*   **Cổng Thanh toán**: SWIFT Alliance Gateway, hệ thống quản lý mạng lưới ATM và các máy chủ kết nối Napas.
*   **Quản lý Danh tính & Truy cập (IAM)**: Microsoft Active Directory (mô hình lai Azure/Entra ID) và hệ thống quản lý tài khoản đặc quyền PAM (CyberArk).
*   **Giám sát An ninh mạng**: Hạ tầng SOC, hệ thống SIEM (Splunk), và các hệ thống Quản lý Lỗ hổng bảo mật.
*   **Kho lưu trữ Dữ liệu**: Cơ sở dữ liệu khách hàng (Oracle DB), Kho dữ liệu (SQL Server DWH), và các thiết bị lưu trữ sao lưu.
*   **Nhân sự**: Toàn bộ nhân viên ngân hàng, quản trị viên hệ thống, lập trình viên, nhà thầu bên thứ ba và người dùng cuối.

### Hệ thống & Đơn vị ngoài Phạm vi (Out-of-Scope)
*   Các cơ sở vật chất vật lý của chi nhánh không chứa hạ tầng công nghệ thông tin (ví dụ: sảnh chờ giao dịch khách hàng).
*   Quy trình kiểm toán tài chính (do các công ty kiểm toán tài chính độc lập thực hiện), ngoại trừ các phần có liên quan đến công nghệ thông tin.
*   Hệ thống mạng của bên thứ ba (ví dụ: Trung tâm thông tin tín dụng CIC) ngoại trừ các điểm kết nối vật lý và logic tại DieuBank.


## 5. Bản đồ các Bên liên quan (Stakeholder Map)

```
+-----------------------------------------------------------------------------------+
|                                HỘI ĐỒNG QUẢN TRỊ (HĐQT)                           |
|                         (Quản trị và Giám sát Chiến lược Chung)                   |
+------------------------------------+----------------------------------------------+
                                     |
                                     v
+------------------------------------+----------------------------------------------+
|                              ỦY BAN CHỈ ĐẠO DỰ ÁN (SC)                            |
|        [CRO (Chủ tịch) | CIO (Tài trợ) | Trưởng ban Pháp chế & Tuân thủ (Cố vấn)] |
+------------------------------------+----------------------------------------------+
                                     |
                                     v
+------------------------------------+----------------------------------------------+
|                           TRƯỞNG CHƯƠNG TRÌNH: CISO                               |
|                     (Thực thi, Phối hợp & Báo cáo Tiến độ)                        |
+------------------------------------+----------------------------------------------+
                                     |
        +----------------------------+----------------------------+
        |                                                         |
        v                                                         v
+-------+----------------------------+             +--------------+-----------------+
|   TUYẾN 1: VẬN HÀNH DN & CNTT      |             |   TUYẾN 2: QUẢN LÝ RỦI RO      |
| - Trưởng bộ phận Core Banking (T24)|             | - Trưởng bộ phận Rủi ro CNTT    |
| - Trưởng bộ phận SOC / SecOps      |             | - Nhân sự Bảo vệ Dữ liệu (DPO)  |
| - Trưởng nhóm Quản trị Hạ tầng     |             +--------------+-----------------+
+------------------------------------+                            |
                                                                  v
                                                   +--------------+-----------------+
                                                   |    TUYẾN 3: ĐÁNH GIÁ ĐỘC LẬP   |
                                                   | - Trưởng bộ phận Kiểm toán NB  |
                                                   +--------------------------------+
```

### Vai trò & Trách nhiệm của các Bên

1.  **Hội đồng Quản trị (HĐQT)**: Phê duyệt Khẩu vị Rủi ro CNTT, phê duyệt khung chính sách an toàn thông tin và nhận các báo cáo tuân thủ định kỳ hàng quý.
2.  **Giám đốc Quản trị Rủi ro (CRO)**: Chủ trì Ủy ban Chỉ đạo Rủi ro. Giám sát việc căn chỉnh rủi ro công nghệ phù hợp với khẩu vị rủi ro vận hành chung của DieuBank.
3.  **Giám đốc Công nghệ (CIO)**: Nhà tài trợ điều hành. Phân bổ nguồn lực, quản lý ngân sách đầu tư cho các dự án khắc phục và giám sát việc thực hiện các kiểm soát của bộ phận vận hành CNTT (Tuyến phòng thủ thứ 1).
4.  **Giám đốc An toàn Thông tin (CISO)**: Trưởng ban triển khai chương trình. Phối hợp lập ma trận tuân thủ, đánh giá rủi ro, nâng cao năng lực SOC và báo cáo trực tiếp cho Ủy ban Chỉ đạo.
5.  **Trưởng bộ phận Kiểm toán Nội bộ**: Đại diện Tuyến phòng thủ thứ 3. Thực hiện kiểm tra kiểm soát độc lập và báo cáo trực tiếp cho Ủy ban Kiểm toán trực thuộc HĐQT.
6.  **Nhân sự Bảo vệ Dữ liệu (DPO)**: Được bổ nhiệm theo quy định của Nghị định 13/2023/NĐ-CP. Chịu trách nhiệm thực hiện Đánh giá Tác động Bảo vệ Dữ liệu Cá nhân (DPIA), đăng ký hồ sơ chuyển dữ liệu ra nước ngoài với Bộ Công an và giám sát các kiểm soát quyền riêng tư.


## 6. Tiêu chí Thành công của Dự án

Để đo lường hiệu quả triển khai Khung GRC Tích hợp, DieuBank đã xác định 6 tiêu chí thành công cốt lõi:

1.  **Vượt qua các kỳ Kiểm tra của Cơ quan Quản lý**: Không có phát hiện nghiêm trọng hoặc hình thức phạt nào trong đợt thanh tra định kỳ của Ngân hàng Nhà nước (NHNN) và Bộ Công an (MPS).
2.  **Tuân thủ Tuyệt đối Nghị định 13 (PDPD)**: 100% dữ liệu PII của khách hàng được phân loại, lấy đồng thuận cấu trúc và được bảo vệ bằng mã hóa/che giấu dữ liệu; hoàn thành và được Bộ Công an phê duyệt Hồ sơ Đánh giá Tác động Xử lý Dữ liệu Cá nhân (DPIA).
3.  **Đạt Chứng nhận ISO 27001**: Hoàn thành cuộc đánh giá chứng nhận Giai đoạn 1 (Stage 1) và Giai đoạn 2 (Stage 2) với không có điểm không tuân thủ nghiêm trọng (Major Non-conformity) nào.
4.  **Tuân thủ Khẩu vị Rủi ro**: Không có rủi ro mức độ "Nghiêm trọng" nào chưa được xử lý quá 30 ngày mà không có sự phê duyệt chính thức bằng văn bản chấp nhận rủi ro từ HĐQT. Trạng thái rủi ro còn lại luôn được duy trì trong giới hạn khẩu vị.
5.  **Chỉ số Phục hồi Vận hành Thực tế**: Các đợt diễn tập liên tục kinh doanh thực tế chứng minh hệ thống Core Banking có khả năng phục hồi với thời gian khôi phục (RTO) dưới 4 giờ và dữ liệu mất mát (RPO) dưới 15 phút.
6.  **Phạm vi Giám sát của SOC**: 100% hệ thống quan trọng (T24, SWIFT, DB Mobile) gửi log tập trung về SIEM, giám sát thời gian thực đối với 20 kịch bản tấn công nguy cơ cao.
