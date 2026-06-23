# Khung Tuân thủ IT GRC Tích hợp cho Ngành Ngân hàng Việt Nam (Dự án DieuBank)

Chào mừng bạn đến với **Khung Tuân thủ IT GRC Tích hợp** được thiết kế và áp dụng cho **Ngân hàng Thương mại Cổ phần DieuBank (DieuBank - DB)**, một ngân hàng thương mại quy mô trung bình đến lớn tại Việt Nam.

Kho lưu trữ này đại diện cho một dự án danh mục đầu tư (portfolio project) cấp tư vấn hoàn chỉnh, chứng minh việc tích hợp các tiêu chuẩn an toàn thông tin toàn cầu với các quy định nghiêm ngặt của ngành ngân hàng Việt Nam và các nghị định bảo vệ dữ liệu cá nhân. Dự án được thiết kế để thể hiện năng lực thực tế chuyên sâu cho các vị trí: Quản trị Rủi ro CNTT, Kiểm toán An toàn Thông tin, Cyber GRC, và Chuyên viên Tuân thủ trong lĩnh vực tài chính - ngân hàng.

---

## 🏢 Bối cảnh Doanh nghiệp: Ngân hàng DieuBank (DB)

DieuBank là ngân hàng thương mại có trụ sở chính tại TP. Hồ Chí Minh, với 45 chi nhánh trên khắp các vùng kinh tế trọng điểm của Việt Nam và có định hướng phát triển mạnh mẽ về ngân hàng số.
*   **Hệ thống Core Banking**: Temenos T24 (Release R22) chạy trên cơ sở dữ liệu Oracle DB (thiết lập cluster).
*   **Kênh Giao dịch**: Ngân hàng điện tử (Internet Banking - Web) và Ngân hàng di động (Mobile Banking - ứng dụng iOS & Android phát triển trên React Native).
*   **Mạng lưới Thanh toán**: Hệ thống ATM (hơn 250 máy, dòng NCR/Diebold), SWIFT Alliance Gateway, và kết nối cổng thanh toán Napas.
*   **Cơ sở hạ tầng**: Microsoft Active Directory (mô hình lai on-premise kết hợp Entra ID) và hạ tầng đám mây lai (VMWare nội bộ và Microsoft Azure).
*   **Giám sát An ninh**: Trung tâm Điều hành An ninh mạng (SOC) chuyên biệt vận hành Splunk SIEM và Microsoft Sentinel.
*   **Phân tích & Cơ sở Dữ liệu**: Kho dữ liệu (Data Warehouse - DWH) chạy trên MS SQL Server và Cơ sở dữ liệu khách hàng lưu giữ thông tin định danh cá nhân (PII) cho khoảng 2,5 triệu tài khoản đang hoạt động.

---

## 🎯 Phạm vi Tích hợp các Quy định Pháp lý

Khung tuân thủ này tích hợp và ánh xạ toàn bộ các yêu cầu từ:
1.  **ISO/IEC 27001:2022**: Hệ thống quản lý an toàn thông tin (ISMS) – Các yêu cầu.
2.  **ISO/IEC 27002:2022**: Quy tắc thực hành kiểm soát an toàn thông tin.
3.  **ISO/IEC 27005:2022**: Hướng dẫn quản lý rủi ro an toàn thông tin.
4.  **Thông tư 09/2020/TT-NHNN (Ngân hàng Nhà nước Việt Nam)**: Quy định về bảo đảm an toàn hệ thống thông tin trong hoạt động ngân hàng.
5.  **Nghị định 13/2023/NĐ-CP (Chính phủ Việt Nam)**: Nghị định về Bảo vệ Dữ liệu Cá nhân (PDPD).
6.  **Luật An ninh mạng 2018 (Luật số 24/2018/QH14)**: Các yêu cầu an ninh mạng đối với hệ thống thông tin quan trọng về an ninh quốc gia.

---

## 📂 Điều hướng & Cấu trúc Thư mục Dự án

Hệ thống tài liệu được tổ chức thành 14 phần logic thể hiện toàn bộ vòng đời GRC của ngân hàng:

*   **[01. Tóm tắt Dự án & Điều lệ](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/01_Executive_Summary.md)**: Trường hợp kinh doanh (Business Case), Điều lệ dự án, Phạm vi và Tiêu chí thành công.
*   **[02. Khung Quản trị & Cơ cấu Tổ chức](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/02_Governance_Framework.md)**: Điều lệ Ủy ban rủi ro, Sơ đồ tổ chức an ninh, Ma trận RACI, và Mô hình 3 Tuyến phòng thủ (3LoD).
*   **[03. Ma trận Ánh xạ Tuân thủ](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/03_Compliance_Matrix.md)**: Ma trận ánh xạ cốt lõi gồm **50 kiểm soát** liên kết ISO 27001, Thông tư 09, Nghị định 13 và Luật An ninh mạng.
*   **[04. Tiêu chuẩn Quản lý Tài sản](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/04_Asset_Management.md)**: Mô hình đánh giá mức độ quan trọng tài sản C-I-A, mô hình sở hữu tài sản, và Tiêu chuẩn Phân loại Dữ liệu (từ Công khai đến Rất giới hạn).
*   **[05. Đánh giá Rủi ro theo ISO 27005](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/05_Risk_Management.md)**: Khẩu vị rủi ro, Ma trận tính điểm rủi ro và Danh mục **30 kịch bản rủi ro công nghệ** ngân hàng thực tế.
*   **[06. Khung Kiểm soát Truy cập](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/06_Access_Control_Framework.md)**: Chính sách IAM, quy trình JML (Nhân sự mới - Luân chuyển - Nghỉ việc), quản lý tài khoản đặc quyền PAM, tiêu chuẩn xác thực MFA và các biểu mẫu (Phiếu yêu cầu quyền hạn, Checklist kiểm tra).
*   **[07. Tiêu chuẩn Bảo mật Dữ liệu & Quyền riêng tư](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/07_Data_Protection_Framework.md)**: Tiêu chuẩn mã hóa (AES-256/TLS 1.3), Tiêu chuẩn Lưu giữ/Xóa dữ liệu, và Cơ chế che giấu dữ liệu (Data Masking) ánh xạ theo Nghị định 13.
*   **[08. Giám sát An ninh mạng (SOC) & SIEM](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/08_Security_Operations.md)**: Mô hình vận hành SOC, tiêu chuẩn ghi nhật ký (logging), **20 quy tắc dò tìm SIEM (KQL/SPL)**, các chỉ số KPIs và KRIs an ninh.
*   **[09. Kế hoạch Ứng phó Sự cố An ninh mạng](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/09_Incident_Response.md)**: Khung ứng phó sự cố, Ma trận leo thang báo cáo, và các kịch bản phản ứng chi tiết (Ransomware, Rò rỉ dữ liệu Nghị định 13, Gián điệp nội bộ).
*   **[10. Kế hoạch Liên tục Kinh doanh & Phục hồi sau Thảm họa](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/10_Business_Continuity_Disaster_Recovery.md)**: Phân tích Tác động Kinh doanh (BIA) xác định mục tiêu RTO/RPO cho các hệ thống lõi và các kịch bản diễn tập thảm họa DR.
*   **[11. Kiểm toán & Giám sát Tuân thủ](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/11_Audit_Compliance.md)**: Chương trình kiểm toán nội bộ, checklist kiểm toán viên, mẫu phát hiện lỗi, Phân tích nguyên nhân gốc rễ (RCA) và Kế hoạch khắc phục (CAP).
*   **[12. Giao diện Dashboard Báo cáo](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/12_Dashboards_Reporting.md)**: Các mô hình dữ liệu báo cáo trực quan cho ban lãnh đạo về Rủi ro, Tuân thủ, SOC và Quyền riêng tư.
*   **[13. Cẩm nang Chuẩn bị Phỏng vấn](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/13_Interview_Preparation.md)**: Kịch bản giới thiệu dự án, các câu chuyện theo phương pháp STAR, và bộ câu hỏi/trả lời phỏng vấn GRC xuất sắc.
*   **[14. Nội dung CV & Xây dựng Thương hiệu](file:///c:/Users/Laptop/OneDrive/Desktop/GRC_project/14_CV_Content.md)**: Các gạch đầu dòng kinh nghiệm trên CV, mô tả dự án trên LinkedIn/GitHub, và bài thuyết trình nhanh 60 giây.
