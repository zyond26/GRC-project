# 09. Kế hoạch & Kịch bản Ứng phó Sự cố An ninh mạng

Ngân hàng DieuBank (DB) duy trì Kế hoạch Ứng phó Sự cố An ninh mạng này phù hợp với tiêu chuẩn **NIST SP 800-61 Rev 2**, **Điều 24 Thông tư 09/2020/TT-NHNN** và **Luật An ninh mạng 2018**.

---

## 1. Vòng đời Xử lý Sự cố An ninh mạng

DieuBank quản lý và ứng cứu các sự cố an ninh thông qua quy trình 6 bước khép kín:

```
+-------------------------------------------------------------------------------+
|                               1. CHUẨN BỊ (PREPARE)                           |
|      Cấu hình hệ thống an toàn, cài đặt EDR, đào tạo đội ngũ, lập kịch bản    |
+--------------------------------------++----------------------------------------+
                                       ||
                                       vv
+-------------------------------------------------------------------------------+
|                            2. PHÁT HIỆN & PHÂN TÍCH                           |
|       SIEM phát cảnh báo -> Phân tích viên xác nhận sự cố, đánh giá mức độ    |
+--------------------------------------++----------------------------------------+
                                       ||
                                       vv
+-------------------------------------------------------------------------------+
|                             3. CÁCH LY (CONTAINMENT)                          |
|      Chặn đứng khẩn cấp: ngắt mạng thiết bị, khóa tài khoản AD, chặn IP nguồn |
+--------------------------------------++----------------------------------------+
                                       ||
                                       vv
+-------------------------------------------------------------------------------+
|                           4. TIÊU DIỆT & PHỤC HỒI                             |
|       Gỡ bỏ mã độc, vá lỗ hổng, cài lại hệ điều hành, khôi phục từ sao lưu    |
+--------------------------------------++----------------------------------------+
                                       ||
                                       vv
+-------------------------------------------------------------------------------+
|                         5. BÁO CÁO CƠ QUAN QUẢN LÝ                            |
|       Báo cáo bằng văn bản về sự cố gửi NHNN và Bộ Công an (A05) trong 24h    |
+--------------------------------------++----------------------------------------+
                                       ||
                                       vv
+-------------------------------------------------------------------------------+
|                            6. HOẠT ĐỘNG SAU SỰ CỐ                             |
|       Đánh giá bài học kinh nghiệm, tối ưu hóa quy tắc SIEM, sửa đổi chính sách|
+-------------------------------------------------------------------------------+
```

---

## 2. Ma trận Phân loại Sự cố & Cấp độ Leo thang

Sự cố được phân loại từ P1 (Nghiêm trọng nhất) đến P4 (Thấp) để xác định thời hạn xử lý (SLA) và quy trình báo cáo nội bộ.

### Phân loại Cấp độ Sự cố

| Phân cấp | Định nghĩa | Tác động Vận hành | SLA Phản ứng | SLA Khắc phục |
| :---: | :--- | :--- | :---: | :---: |
| **P1 - Nghiêm trọng**| Sập hệ thống diện rộng hoặc vi phạm pháp luật nghiêm trọng. | Hệ thống Core Banking (T24) hoặc SWIFT ngưng hoạt động; cơ sở dữ liệu PII khách hàng bị rò rỉ (vi phạm Nghị định 13). | **15 Phút** | **4 Giờ** |
| **P2 - Cao** | Hệ thống bị suy giảm công suất hoặc mất kết nối cục bộ. | Ứng dụng Mobile Banking không thể đăng nhập; sập mạng chi nhánh; mạng lưới ATM ngừng hoạt động >30%. | **30 Phút** | **8 Giờ** |
| **P3 - Trung bình** | Sự cố ảnh hưởng cục bộ, có phương án thay thế tạm thời. | Trang thông tin nội bộ ngừng; một máy tính làm việc bị nhiễm virus; nhân viên báo cáo nhận email lừa đảo. | **2 Giờ** | **24 Giờ** |
| **P4 - Thấp** | Tác động không đáng kể. | Cổng mạng chi nhánh bị lỗi; một tài khoản đăng nhập sai quá số lần; phát hiện dò quét IP ngoài internet. | **1 Ngày làm việc**| **5 Ngày làm việc**|

### Ma trận Leo thang Báo cáo

```
 Phát hiện Sự cố P1 ---> SOC cô lập khẩn cấp (15p) ---> Báo cáo CISO & CIO (15p)
                               |
                               +---> CISO báo cáo CRO, CEO và Trưởng ban Pháp chế (30p)
                               |
                               +---> Ban Pháp chế gửi báo cáo khẩn cấp NHNN & Bộ Công an (<24h)
```

| Cấp độ Leo thang | Điều kiện Kích hoạt | Nhân sự chịu trách nhiệm | SLA Thời gian Báo cáo |
| :--- | :--- | :--- | :---: |
| **Cấp độ 1** | Cảnh báo thô xuất hiện trên SIEM. | Phân tích viên SOC Tuyến 1 | Ngay lập tức (<5 phút) |
| **Cấp độ 2** | Xác nhận là sự cố thực tế mức P1/P2. | Trưởng nhóm SOC báo cáo CISO & CIO | < 15 Phút |
| **Cấp độ 3** | Sự cố mức P1 (Active ransomware hoặc rò rỉ dữ liệu). | CISO báo cáo CEO, CRO và Ban Điều hành | < 30 Phút |
| **Cấp độ 4** | Phát sinh nghĩa vụ thông báo pháp lý bắt buộc. | Trưởng ban Pháp chế & CISO gửi báo cáo NHNN & Bộ Công an (A05) | **< 24 Giờ** |

---

## 3. Các Kịch bản Ứng phó Sự cố Tiêu chuẩn (Playbooks)

### Kịch bản A: Hệ thống bị Nhiễm Mã độc Tống tiền (Ransomware)

```
  [ PHÁT HIỆN ]                [ CÁCH LY ]                [ TIÊU DIỆT ]              [ KHÔI PHỤC ]
Cảnh báo ransomware ---> Cô lập máy chủ qua EDR ---> Định dạng lại ổ đĩa ---> Khôi phục dữ liệu từ
trên Core T24            Khóa cổng switch mạng        Tìm máy tính nguồn F0    bản sao lưu bất biến
```

#### Quy trình xử lý chi tiết
1.  **Phát hiện (Identification)**:
    *   EDR phát cảnh báo đỏ: *Phát hiện hành vi ghi mã hóa hàng loạt tệp tin trên máy chủ Database Core IP 10.10.2.14*.
    *   Phân tích viên xác nhận tiến trình lạ đang hoạt động; màn hình hiển thị thông tin đòi tiền chuộc.
2.  **Cách ly (Containment)**:
    *   SOC đẩy lệnh API từ xa qua CrowdStrike EDR để **Cô lập Logic (Isolate Host)** máy chủ bị nhiễm.
    *   Đội ngũ mạng thực hiện tắt cổng switch mạng vật lý cấp nguồn cho máy chủ.
    *   Vô hiệu hóa toàn bộ tài khoản Active Directory có liên quan để chặn đường lây lan ngang (lateral movement).
3.  **Tiêu diệt (Eradication)**:
    *   Tìm kiếm thiết bị nguồn (Patient Zero - F0) phát tán mã độc (ví dụ: máy trạm nhân viên tải file đính kèm email lừa đảo).
    *   Thực hiện phân tích mã độc trên Sandbox để lấy các chỉ số IoC (IP máy chủ C2, hash file payload).
    *   Định dạng và ghi đè toàn bộ dữ liệu trên ổ đĩa máy chủ bị nhiễm để làm sạch hoàn toàn.
4.  **Khôi phục (Recovery)**:
    *   Kiểm tra tính toàn vẹn của bản sao lưu gần nhất (đảm bảo không chứa mã độc).
    *   Cài đặt lại hệ điều hành và phần mềm nền từ các đĩa cài đặt chuẩn (golden image).
    *   Khôi phục cơ sở dữ liệu T24 từ bản sao lưu bất biến lưu ngoại tuyến.
5.  **Hoạt động sau sự cố**:
    *   **NGHIÊM CẤM TRẢ TIỀN CHUỘC** (chính sách bắt buộc của HĐQT DieuBank).
    *   Cập nhật các bản vá hệ thống; block dải IP đen của tin tặc tại tường lửa biên.

---

## 4. Kịch bản B: Rò rỉ Dữ liệu Khách hàng (Nghị định 13 / PDPD)

```
   [ XÁC NHẬN ]                 [ CHẶN ĐỨNG ]                [ ĐÁNH GIÁ ]                 [ THÔNG BÁO ]
Log database ghi nhận ---> Ngắt kết nối qua PAM gateway ---> Xác định trường dữ liệu ---> Nộp hồ sơ cho A05 (<24h)
select số lượng lớn        Khóa tài khoản AD người dùng  Đếm số lượng khách ảnh hưởng   Gửi SMS/Email xin lỗi khách
```

#### Quy trình xử lý chi tiết
1.  **Phát hiện (Identification)**:
    *   SIEM Rule 3 phát cảnh báo: *Phát hiện tài khoản DBA truy vấn xuất dữ liệu bảng CUSTOMER_PII (50.000 dòng) không theo quy trình*.
    *   Xác nhận log ghi nhận dữ liệu bị xuất thô về một máy trạm nằm ngoài phân vùng cho phép.
2.  **Cách ly (Containment)**:
    *   SOC thực hiện ngắt kết nối phiên làm việc của quản trị viên ngay trên cổng CyberArk PAM.
    *   Khóa tài khoản Active Directory của nhân viên thực hiện truy vấn.
    *   Cách ly phân vùng mạng chứa máy trạm nhận dữ liệu xuất ra.
3.  **Đánh giá & Điều tra**:
    *   Kiểm tra vết SQL để xác định chính xác các trường thông tin bị rò rỉ (ví dụ: số dư, số thẻ, số điện thoại, số CCCD).
    *   Xác định chính xác số lượng khách hàng bị ảnh hưởng.
    *   Nhân sự DPO thực hiện ghi nhận sự việc vào Nhật ký Sự cố Rò rỉ Dữ liệu Cá nhân của DieuBank.
4.  **Thông báo Pháp lý (SLA Bắt buộc)**:
    *   **Nộp Hồ sơ về Bộ Công an**: Theo quy định tại **Điều 26 và Điều 38 Nghị định 13/2023/NĐ-CP**, nhân sự DPO của DieuBank bắt buộc phải lập và nộp báo cáo chi tiết về sự cố rò rỉ dữ liệu cá nhân gửi Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao (A05) **trong vòng 24 giờ kể từ khi phát hiện sự cố**.
    *   **Thông báo khách hàng**: Thiết lập tổng đài tự động gửi SMS/Email thông báo xin lỗi khách hàng, chi tiết dải dữ liệu bị lộ lọt, khuyến nghị khách hàng thay đổi mật khẩu e-banking và cung cấp số hotline hỗ trợ.
5.  **Khắc phục**:
    *   Cấu hình lại chính sách Dynamic Data Masking; áp dụng giới hạn số lượng dòng tối đa được phép SELECT trong một câu lệnh đối với người dùng quản trị.

---

## 5. Kịch bản C: Hành vi Đánh cắp Dữ liệu từ Nội bộ (Insider Threat)

```
   [ PHÁT HIỆN ]                [ NGĂN CHẶN ]                 [ BẢO VỆ CHỨNG CỨ ]             [ XỬ LÝ ]
Log DLP cảnh báo sao ---> Khóa tài khoản AD của user ----> Trích xuất file ghi hình PAM ----> Đưa nhân sự sang HR
chép file mật ra USB     Khóa thẻ từ ra vào tòa nhà       Tính mã băm hash đĩa cứng      Bàn giao công an (A05)
```

#### Quy trình xử lý chi tiết
1.  **Phát hiện (Identification)**:
    *   Hệ thống DLP (Data Loss Prevention) phát cảnh báo mức Critical: *Nhân viên Nguyễn Văn X đang sao chép tệp tin chứa sơ đồ thiết kế mạng lõi DieuBank vào thiết bị lưu trữ USB ngoài*.
2.  **Chặn đứng khẩn cấp**:
    *   SOC gửi lệnh khóa tài khoản AD và thu hồi toàn bộ token xác thực cloud của nhân viên X.
    *   Tự động kích hoạt khóa màn hình máy trạm của nhân viên X.
    *   SOC thông báo phòng bảo vệ tòa nhà tạm thời khóa thẻ từ ra vào của nhân viên X để ngăn chặn việc mang thiết bị lưu trữ vật lý ra ngoài tòa nhà.
3.  **Bảo vệ Chứng cứ Số**:
    *   Trích xuất toàn bộ log ghi hình phiên làm việc và lịch sử gõ phím từ cổng CyberArk PAM.
    *   Thực hiện tạo bản sao đĩa cứng (bit-stream image) của máy trạm nhân viên X bằng công cụ chuyên dụng (như FTK Imager) và tính toán mã băm SHA-256 để bảo vệ tính toàn vẹn của bằng chứng trước tòa.
    *   Lập biên bản bàn giao niêm phong thiết bị vật lý có chữ ký chứng kiến của đại diện an ninh.
4.  **Xử lý Kỷ luật & Pháp lý**:
    *   Chuyển toàn bộ hồ sơ chứng cứ số sang Khối Nhân sự và ban Pháp chế.
    *   Tổ chức buổi điều trần kỷ luật lao động khẩn cấp.
    *   Bàn giao hồ sơ và nhân sự sang Cục An ninh mạng và Phòng chống tội phạm công nghệ cao (A05) để xử lý hình sự về hành vi phá hoại an toàn hệ thống thông tin ngân hàng theo Luật An ninh mạng 2018.
5.  **Khắc phục**:
    *   Rà soát và đẩy lại chính sách khóa cổng USB hàng loạt qua Active Directory Group Policy (GPO).
