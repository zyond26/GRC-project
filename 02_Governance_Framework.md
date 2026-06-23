# 02. Khung Quản trị & Cơ cấu Tổ chức

Để thiết lập trách nhiệm giải trình rõ ràng và đáp ứng yêu cầu phân tách nhiệm vụ được quy định tại **Thông tư 09/2020/TT-NHNN** và tiêu chuẩn **ISO/IEC 27001:2022**, Ngân hàng DieuBank (DB) đã cơ cấu khung quản trị CNTT chặt chẽ.


## 1. Cơ cấu Ban Quản lý Rủi ro & Quản trị

Khung quản trị của DieuBank đảm bảo an toàn thông tin và rủi ro công nghệ được quản lý như một vấn đề kinh doanh trọng yếu chứ không chỉ là vấn đề kỹ thuật của bộ phận IT.

```
                  +----------------------------------------------+
                  |             HỘI ĐỒNG QUẢN TRỊ (HĐQT)         |
                  |     - Xác định Khẩu vị Rủi ro & Chiến lược   |
                  |     - Phê duyệt Chính sách An toàn Thông tin |
                  +----------------------+-----------------------+
                                         |
                                         +--------------------------------------+
                                         |                                      |
                                         v                                      v
                  +----------------------+-----------------------+   +----------+-----------+
                  |         ỦY BAN KIỂM TOÁN TRỰC THUỘC HĐQT     |   |    ỦY BAN QUẢN LÝ    |
                  |     - Giám sát Kiểm toán Nội bộ & Độc lập    |   |  RỦI RO TRỰC THUỘC HĐQT|
                  |     - Đảm bảo độc lập đánh giá kiểm soát     |   | (Chiến lược RR Chung) |
                  +----------------------------------------------+   +----------+-----------+
                                                                                |
                                                                                v
                                                                     +----------+-----------+
                                                                     |   ỦY BAN CHỈ ĐẠO RỦI |
                                                                     |     RO CNTT (RSC)    |
                                                                     |  (Họp định kỳ Hàng quý)|
                                                                     +----------+-----------+
                                                                                |
                                         +--------------------------------------+
                                         |
                                         v
                  +----------------------+-----------------------+
                  |                TỔNG GIÁM ĐỐC (CEO)           |
                  |            - Hiện thực hóa Chiến lược        |
                  +----------------------+-----------------------+
                                         |
         +-------------------------------+-------------------------------+
         |                                                               |
         v                                                               v
+--------+-----------------------+                             +--------+-----------------------+
|    GIÁM ĐỐC CÔNG NGHỆ (CIO)   |                             |   GIÁM ĐỐC QUẢN TRỊ RR (CRO)  |
|   - Khối Công nghệ Thông tin  |                             |   - Khối Quản trị Rủi ro      |
|   - Tập trung Vận hành CNTT   |                             |   - Tập trung Rủi ro & KSoát  |
+--------+-----------------------+                             +--------+-----------------------+
         |                                                               |
         | (Báo cáo Hành chính)                                          | (Chỉ đạo Chức năng)
         |                                                               |
         +-------------------------------+-------------------------------+
                                         |
                                         v
                  +----------------------+-----------------------+
                  |  GIÁM ĐỐC AN TOÀN THÔNG TIN (CISO)           |
                  |   - Khối An toàn Thông tin Độc lập           |
                  |   - Quản trị An ninh Thông tin Độc lập       |
                  +----------------------------------------------+
```

### Ủy ban Chỉ đạo Rủi ro CNTT (RSC)
RSC được thành lập để giám sát rủi ro công nghệ, trạng thái tuân thủ pháp lý và các sáng kiến an ninh thông tin.
*   **Chủ tịch**: Giám đốc Quản trị Rủi ro (CRO)
*   **Thành viên Thường trực**: Giám đốc Công nghệ (CIO), Giám đốc An toàn Thông tin (CISO), Trưởng ban Pháp chế & Tuân thủ, Trưởng khối Ngân hàng Số.
*   **Quan sát viên**: Trưởng bộ phận Kiểm toán Nội bộ (không tham gia biểu quyết để đảm bảo tính độc lập).
*   **Tần suất họp**: Định kỳ hàng quý, hoặc họp bất thường khi phát sinh sự cố an ninh mức độ "Nghiêm trọng" hoặc phát hiện lỗi kiểm toán lớn.
*   **Nhiệm vụ chính**:
    *   Xem xét và phê duyệt các chính sách an toàn thông tin trước khi trình HĐQT phê duyệt.
    *   Giám sát các chỉ số rủi ro CNTT, chỉ số rủi ro chính (KRIs) và tiến độ xử lý rủi ro.
    *   Phê duyệt và phân bổ ngân sách cho các dự án khắc phục rủi ro lớn.
    *   Đánh giá các báo cáo sự cố an ninh nghiêm trọng và các kết quả kiểm tra tuân thủ.


## 2. Sơ đồ Tổ chức An toàn Thông tin

Để ngăn ngừa xung đột lợi ích (ví dụ: bộ phận Vận hành CNTT ưu tiên hiệu năng hệ thống hơn các kiểm soát an ninh cần thiết), DieuBank phân tách độc lập Khối An toàn Thông tin khỏi Khối Công nghệ Thông tin.

```
                              GIÁM ĐỐC QUẢN TRỊ RỦI RO (CRO)
                                            |
                                            v
                         GIÁM ĐỐC AN TOÀN THÔNG TIN (CISO)
                                            |
        +-----------------------------------+-----------------------------------+
        |                                   |                                   |
        v                                   v                                   v
+-------+---------------+           +-------+---------------+           +-------+---------------+
|  Phòng Quản lý Rủi ro |           |  Phòng Vận hành An    |           |  Văn phòng Bảo vệ     |
|    CNTT & Tuân thủ    |           |   ninh mạng (SOC)     |           |   Dữ liệu Cá nhân     |
+-------+---------------+           +-------+---------------+           +-------+---------------+
        |                                   |                                   |
        |-- Chuyên viên IT GRC              |-- Kỹ sư SIEM/SOC                  |-- Nhân sự Bảo vệ Dữ liệu (DPO)
        |-- Chuyên viên Tuân thủ            |-- Trưởng nhóm Ứng phó Sự cố       |-- Quản trị viên Đồng thuận
        |-- Nhân sự Kiểm toán (Điều phối)   |-- Chuyên viên Tình báo Đe dọa      |-- Điều phối viên DPIA
```

### Vai trò các Phòng/Ban chuyên trách
1.  **Phòng Quản lý Rủi ro CNTT & Tuân thủ**: Giám sát việc tuân thủ Thông tư 09/2020/TT-NHNN, duy trì Sổ tay Rủi ro CNTT, điều phối đánh giá rủi ro và quản lý kế hoạch khắc phục lỗi kiểm toán.
2.  **Phòng Vận hành An ninh mạng (SOC)**: Vận hành hệ thống SIEM (Splunk), giám sát cảnh báo thời gian thực, ứng phó sự cố an ninh, săn tìm mối đe dọa và thực hiện quét quét lỗ hổng bảo mật.
3.  **Văn phòng Bảo vệ Dữ liệu Cá nhân**: Do nhân sự DPO dẫn dắt. Điều phối các hoạt động tuân thủ Nghị định 13/2023/NĐ-CP, quản lý Hồ sơ đánh giá tác động (DPIA), tiếp nhận yêu cầu quyền chủ thể dữ liệu của khách hàng và đăng ký các hoạt động xử lý dữ liệu với Bộ Công an.

## 3. Mô hình Ba Tuyến Phòng thủ (3LoD)

DieuBank áp dụng mô hình 3 Tuyến phòng thủ để làm rõ vai trò và trách nhiệm trong quản lý rủi ro và kiểm soát:

```
+--------------------------------------------------------------------------------------------------+
|                                  HỘI ĐỒNG QUẢN TRỊ / ỦY BAN KIỂM TOÁN                            |
+--------------------------------------------------------------------------------------------------+
                                                 ^
                                                 | (Báo cáo Chiến lược)
+------------------------------------------------+-------------------------------------------------+
|                                           BAN BAN ĐIỀU HÀNH                                      |
+--------------------------------------------------------------------------------------------------+
          ^                                                                     ^
          | (Thực thi & Báo cáo)                                                | (Giám sát & Báo cáo)
+---------+----------------------------+                     +------------------+------------------+
|       TUYẾN PHÒNG THỦ THỨ 1          |                     |       TUYẾN PHÒNG THỦ THỨ 2          |
| (Sở hữu Rủi ro & Thực thi Kiểm soát) |                     | (Thiết lập Chính sách & Giám sát)   |
+--------------------------------------+                     +-------------------------------------+
| - Vận hành CNTT (Core, Mạng, DB)     |                     | - Phòng An toàn Thông tin (CISO)    |
| - Phát triển Ứng dụng (DevOps/QA)    |                     | - Phòng Quản lý Rủi ro CNTT         |
| - Các Đơn vị Kinh doanh (Bán lẻ...)  |                     | - Phòng Pháp chế & Tuân thủ         |
|                                      |                     |                                     |
| *Hành động: Cài đặt bản vá, quản lý  |                     | *Hành động: Đánh giá rủi ro độc lập,|
| người dùng, cấu hình an ninh thiết   |                     | giám sát cảnh báo SIEM, soạn thảo   |
| bị, vận hành hàng ngày theo quy định.|                     | chính sách, kiểm tra tuân thủ.      |
+--------------------------------------+                     +-------------------------------------+
                                                                                ^
                                                                                |
                                                                                | (Kiểm toán Độc lập)
                                                             +------------------+------------------+
                                                             |       TUYẾN PHÒNG THỦ THỨ 3          |
                                                             |        (Đánh giá Độc lập)           |
                                                             +-------------------------------------+
                                                             | - Bộ phận Kiểm toán Nội bộ          |
                                                             |                                     |
                                                             | *Hành động: Kiểm tra độc lập tuyến  |
                                                             | 1 và tuyến 2, xác nhận tính hiệu lực|
                                                             | kiểm soát, báo cáo Ủy ban Kiểm toán.|
                                                             +-------------------------------------+
```


## 4. Ma trận RACI

Ma trận này phân định trách nhiệm đối với các quy trình GRC và kiểm soát chính của DieuBank.

*   **R** - Responsible (Trực tiếp thực hiện)
*   **A** - Accountable (Chịu trách nhiệm cuối cùng / Người phê duyệt)
*   **C** - Consulted (Tham vấn ý kiến)
*   **I** - Informed (Nhận thông tin báo cáo)

| Quy trình GRC / Quyết định An ninh | HĐQT | CEO | CRO | CIO | CISO | DPO | Kiểm toán | Các Khối |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Phê duyệt Chính sách An toàn Thông tin** | **A** | **C** | **C** | **C** | **R** | **C** | **I** | **I** |
| **Xác định Khẩu vị Rủi ro CNTT** | **A** | **R** | **R** | **C** | **C** | **I** | **I** | **I** |
| **Thực hiện Đánh giá Rủi ro theo ISO 27005**| **I** | **I** | **A** | **C** | **R** | **C** | **I** | **R** |
| **Phê duyệt Quyền truy cập Core Banking** | **I** | **I** | **I** | **A** | **C** | **I** | **I** | **R** |
| **Đánh giá Tác động Bảo vệ Dữ liệu (DPIA)** | **I** | **I** | **C** | **C** | **C** | **A** | **I** | **R** |
| **Vận hành Hệ thống SOC & Quy tắc SIEM** | **I** | **I** | **I** | **I** | **A** | **I** | **I** | **I** |
| **Ứng phó Sự cố An ninh mạng (Nghiêm trọng)**| **I** | **A** | **R** | **R** | **R** | **C** | **I** | **C** |
| **Thực thi Kế hoạch BCP / Thử nghiệm DR** | **I** | **A** | **C** | **R** | **C** | **I** | **I** | **R** |
| **Thực hiện Kiểm toán An ninh Độc lập** | **A** | **I** | **I** | **C** | **C** | **C** | **R** | **C** |
| **Khắc phục lỗi theo Kế hoạch CAP** | **I** | **I** | **I** | **A** | **C** | **C** | **I** | **R** |


## 5. Hệ thống Chính sách An toàn Thông tin

Hệ thống tài liệu Quản lý An toàn Thông tin (ISMS) của DieuBank được tổ chức thành 4 cấp độ phân tầng, đảm bảo tính nhất quán từ định hướng chiến lược đến quy trình vận hành kỹ thuật.

```
       +---------------------------------------------+
       |                  CẤP ĐỘ 1                   |
       |        CHÍNH SÁCH AN TOÀN THÔNG TIN CHUNG   |  <-- Hội đồng Quản trị phê duyệt
       |      Tuyên bố tầm nhìn & Cam kết tuân thủ   |
       +----------------------++---------------------+
                              ||
                              vv
       +---------------------------------------------+
       |                  CẤP ĐỘ 2                   |
       |         CÁC CHÍNH SÁCH CHUYÊN BIỆT          |  <-- Ủy ban Chỉ đạo Rủi ro phê duyệt
       |   Truy cập, Mã hóa, Ứng phó sự cố, BCP/DR,   |
       |         Bảo vệ dữ liệu cá nhân (Decree 13)  |
       +----------------------++---------------------+
                              ||
                              vv
       +---------------------------------------------+
       |                  CẤP ĐỘ 3                   |
       |           TIÊU CHUẨN & QUY TRÌNH            |  <-- CIO / CISO phê duyệt ban hành
       |  Tiêu chuẩn MFA, Mật khẩu, PAM, JML,        |
       |  Quy trình quét lỗ hổng, Sao lưu dữ liệu    |
       +----------------------++---------------------+
                              ||
                              vv
       +---------------------------------------------+
       |                  CẤP ĐỘ 4                   |
       |           HƯỚNG DẪN & CHECKLIST             |  <-- Trưởng phòng / Quản lý phê duyệt
       |   Quy tắc SIEM, Hướng dẫn xử lý cảnh báo,   |
       |   Checklist cấu hình máy chủ, Phiếu yêu cầu |
       +---------------------------------------------+
```

### Chi tiết Phân cấp Tài liệu

1.  **Cấp độ 1: Chính sách An toàn Thông tin Chung (ISP)**
    *   **Phạm vi**: Toàn bộ ngân hàng.
    *   **Phê duyệt**: HĐQT ký duyệt sau khi CISO soạn thảo và Ủy ban Chỉ đạo thông qua.
    *   **Mục đích**: Xác định triết lý an ninh thông tin, cam kết tuân thủ pháp luật, cơ chế quản lý rủi ro và trao quyền hạn tối cao cho vai trò của CISO.
2.  **Cấp độ 2: Các Chính sách Chuyên biệt**
    *   **Phạm vi**: Từng miền an ninh cụ thể (ví dụ: Chính sách kiểm soát truy cập, Chính sách mã hóa, Chính sách an toàn vật lý, Chính sách quyền riêng tư dữ liệu).
    *   **Phê duyệt**: Ủy ban Chỉ đạo Rủi ro phê duyệt.
    *   **Mục đích**: Đặt ra các yêu cầu kiểm soát bắt buộc và kỳ vọng vận hành trong từng miền an ninh.
3.  **Cấp độ 3: Tiêu chuẩn và Quy trình Vận hành**
    *   **Phạm vi**: Quy định kỹ thuật và các bước thực hiện (ví dụ: Quy trình JML, Tiêu chuẩn độ mạnh mật khẩu, Quy trình quản lý bản vá, Quy trình mã hóa cơ sở dữ liệu).
    *   **Phê duyệt**: CIO và CISO đồng phê duyệt ban hành.
    *   **Mục đích**: Cung cấp các thông số kỹ thuật (như thuật toán mã hóa AES-256) và quy trình từng bước cho đội ngũ kỹ thuật CNTT thực hiện.
4.  **Cấp độ 4: Hướng dẫn Công việc, Tài liệu kỹ thuật & Checklist**
    *   **Phạm vi**: Các tác vụ hành chính hoặc kỹ thuật cụ thể (ví dụ: Hướng dẫn cấu hình an toàn hệ điều hành Windows, Phiếu yêu cầu quyền truy cập, Kịch bản phân tích cảnh báo SIEM).
    *   **Phê duyệt**: Trưởng phòng vận hành phê duyệt.
    *   **Mục đích**: Các bảng kiểm tra và hướng dẫn thực tế để đảm bảo tính nhất quán trong các thao tác vận hành hàng ngày.
