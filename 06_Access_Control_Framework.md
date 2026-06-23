# 06. Khung Kiểm soát Truy cập

Ngân hàng DieuBank (DB) áp dụng các kiểm soát quản lý danh tính và quyền truy cập (IAM) nghiêm ngặt phù hợp với tiêu chuẩn **ISO/IEC 27001:2022 (Kiểm soát A.5.15 đến A.5.18 và A.8.2)**, và **Điều 16 Thông tư 09/2020/TT-NHNN**.

---

## 1. Nguyên tắc & Chính sách Kiểm soát Truy cập

Quyền truy cập vào các hệ thống thông tin của DieuBank tuân theo ba nguyên tắc cốt lõi:

1.  **Từ chối theo Mặc định (Default Deny)**: Mọi quyền truy cập ban đầu đều bị chặn. Quyền truy cập chỉ được cấp phát khi có yêu cầu bằng văn bản, có lý do nghiệp vụ rõ ràng và được phê duyệt hợp lệ.
2.  **Quyền hạn Tối thiểu (Least Privilege)**: Người dùng chỉ được cấp phát các quyền truy cập tối thiểu cần thiết để hoàn thành công việc chuyên môn được giao.
3.  **Nguyên tắc Cần biết mới biết (Need-to-Know)**: Quyền truy cập vào dữ liệu cá nhân nhạy cảm của khách hàng (PII) được giới hạn chặt chẽ cho các nhân sự trực tiếp xử lý giao dịch được phê duyệt.

---

## 2. Quy trình Quản lý Vòng đời Nhân sự (JML Process)

Quy trình JML quản lý việc tạo, thay đổi và thu hồi quyền hạn của nhân sự tại DieuBank để tránh hiện tượng tích lũy quyền hạn thừa.

```
       [ QUY TRÌNH GIA NHẬP (JOINER) ]
HR Tuyển dụng -> Tạo Định danh AD -> Quản lý Yêu cầu Quyền -> Chủ Tài sản phê duyệt -> Cấp Quyền

       [ QUY TRÌNH LUÂN CHUYỂN (MOVER) ]
HR Báo Luân chuyển -> Rủi ro CNTT Rà soát chéo -> Thu hồi Quyền cũ -> Xin Quyền mới -> Phê duyệt

       [ QUY TRÌNH NGHỈ VIỆC (LEAVER) ]
HR Báo Nghỉ việc -> Khóa tài khoản AD ngay lập tức -> Thu hồi Thẻ từ -> Bàn giao Thiết bị
```

### SLA Mục tiêu Thời gian Xử lý Nhân sự

| Giai đoạn nhân sự | Sự kiện Kích hoạt | Hành động bắt buộc | SLA Mục tiêu |
| :--- | :--- | :--- | :--- |
| **Gia nhập (Onboarding)** | Ký hợp đồng lao động thành công. | Tạo tài khoản AD, phân vai trò mặc định, kích hoạt MFA. | Trong vòng 2 Ngày làm việc |
| **Luân chuyển (Mover)** | Thông báo luân chuyển phòng ban. | Soát xét quyền hạn hiện tại; thu hồi quyền cũ; yêu cầu quyền mới. | Trong vòng 3 Ngày làm việc |
| **Nghỉ việc (Khẩn cấp/Kỷ luật)**| Chấm dứt hợp đồng do kỷ luật/sai phạm. | Khóa tài khoản AD lập tức, chấm dứt toàn bộ session kết nối, khóa thẻ từ ra vào. | **Ngay lập tức (< 15 phút)** |
| **Nghỉ việc (Thông thường)** | Ngày làm việc cuối cùng của nhân viên. | Vô hiệu hóa tài khoản AD, tắt chuyển tiếp email, thu hồi máy tính và thiết bị. | **Trước 17:00 ngày làm việc cuối**|

---

## 3. Khung Quản lý Truy cập Đặc quyền (PAM)

Các tài khoản đặc quyền (như Domain Admin, Database Admin, Network Admin, Root T24) có rủi ro cao nhất đối với DieuBank. Các tài khoản này được quản lý tập trung qua giải pháp PAM (CyberArk):

1.  **Quản lý Mật khẩu Tự động**: Quản trị viên không được biết mật khẩu thực tế của tài khoản đích. Mật khẩu được tự động xoay vòng bởi CyberArk sau mỗi 24 giờ.
2.  **Cổng kết nối Tập trung**: Mọi phiên làm việc quản trị bắt buộc phải đi qua cổng CyberArk PSM (Privileged Session Manager). Nghiêm cấm kết nối trực tiếp SSH hoặc RDP từ máy trạm nhân viên đến máy chủ hệ thống lõi.
3.  **Ghi hình Phiên làm việc**: 100% phiên làm việc đặc quyền (bao gồm lịch sử gõ phím và quay video màn hình) được ghi lại và lưu trữ tại vùng đĩa ghi một lần đọc nhiều lần (WORM) phục vụ điều tra forensic độc lập.
4.  **Phê duyệt kép (Nguyên tắc 4 mắt)**: Các thao tác thay đổi cấu trúc dữ liệu hoặc cập nhật firmware hệ thống SWIFT yêu cầu sự phê duyệt trực tuyến (real-time approve) từ CISO hoặc CIO trước khi phiên kết nối được khởi động.

---

## 4. Tiêu chuẩn Xác thực Đa yếu tố (MFA)

MFA là bắt buộc đối với tất cả các quyền truy cập vào hạ tầng nội bộ, ngoại trừ các kênh thông tin công cộng.

*   **Các khu vực bắt buộc**:
    *   Truy cập từ xa qua VPN hoặc Virtual Desktop.
    *   Đăng nhập vào các hệ thống chứa dữ liệu "Giới hạn" hoặc "Rất Giới hạn".
    *   Tất cả các đăng nhập tài khoản quản trị viên đặc quyền (qua PAM).
*   **Các yếu tố xác thực được phê duyệt**:
    1.  *Yếu tố thứ nhất*: Mật khẩu phức tạp (tối thiểu 14 ký tự).
    2.  *Yếu tố thứ hai*: Khóa bảo mật phần cứng FIDO2 (ví dụ: YubiKey) hoặc thông báo Push qua ứng dụng Microsoft Authenticator.
*   **Hạn chế**: Nghiêm cấm sử dụng SMS OTP làm yếu tố xác thực thứ hai cho nhân viên nội bộ do nguy cơ bị tấn công SIM-swapping. SMS OTP chỉ được chấp nhận làm yếu tố xác thực phụ cho khách hàng cá nhân sử dụng dịch vụ retail.

---

## 5. Các Mẫu Biểu mẫu & Báo cáo Tiêu chuẩn

### Mẫu A: Phiếu Yêu cầu Quyền truy cập Người dùng (UARF)

```
================================================================================
                    NGÂN HÀNG DIEUBANK - PHIẾU YÊU CẦU QUYỀN TRUY CẬP
================================================================================
THÔNG TIN YÊU CẦU
-----------------
Mã số Yêu cầu: UARF-2026-0616-0421
Ngày Yêu cầu: 16/06/2026
Họ tên Nhân viên: Nguyễn Văn A
Mã số Nhân viên: DB-8973
Phòng ban/Khối: Khối Quan hệ Khách hàng Bán lẻ
Chức danh: Chuyên viên Phê duyệt Tín dụng tiêu dùng

CHI TIẾT QUYỀN TRUY CẬP HỆ THỐNG
-------------------------------
Hệ thống Yêu cầu: Temenos T24 Core Banking
Vai trò/Quyền hạn xin cấp: Vai trò Phê duyệt Hồ sơ Tín dụng tiêu dùng
Lý do Nghiệp vụ: Cần thiết để đánh giá và duyệt hồ sơ vay thế chấp
                 cho chiến dịch ưu đãi mua nhà Q3.
Thời hạn cấp quyền: [X] Vô thời hạn  [] Tạm thời (Đến ngày: ____________)

BỘ PHẬN AN NINH THÔNG TIN KIỂM TRA PHÂN TÁCH NHIỆM VỤ (SoD)
---------------------------------------------------------
Yêu cầu này có xung đột với các vai trò hiện tại không? [ ] Có  [X] Không
Nhân sự Kiểm tra (Chuyên viên IT GRC): Trần Thị B
Chữ ký số xác nhận: [Trần B - Đã ký số hệ thống]

PHÊ DUYỆT CỦA CÁC CẤP
---------------------
1. Quản lý Trực tiếp: Lê Văn C
   Ý kiến: [X] Phê duyệt  [] Từ chối  Ngày: 16/06/2026
   Chữ ký số xác nhận: [Lê C - Đã ký số hệ thống]

2. Chủ sở hữu Tài sản Nghiệp vụ (Trưởng nhóm Core Banking): Phạm Văn D
   Ý kiến: [X] Phê duyệt  [] Từ chối  Ngày: 16/06/2026
   Chữ ký số xác nhận: [Phạm D - Đã ký số hệ thống]

================================================================================
```

### Mẫu B: Checklist Soát xét Quyền truy cập Định kỳ

Bảng kiểm tra này bắt buộc phải được các Chủ sở hữu Nghiệp vụ thực hiện hàng quý khi xác nhận quyền hạn người dùng trên hệ thống do mình quản lý.

```
+-------------------------------------------------------------------------------+
|                 CHECKLIST SOÁT XÉT QUYỀN TRUY CẬP HÀNG QUÝ                    |
+-------------------------------------------------------------------------------+
| Hệ thống Soát xét: Vai trò người dùng trên Cơ sở Dữ liệu Core T24             |
| Người thực hiện: Phạm Văn D (Chủ sở hữu Nghiệp vụ)                            |
| Ngày thực hiện soát xét: 16/06/2026                                           |
+-------------------------------------------------------------------------------+
| [X] Bước 1: Xác minh Trạng thái Nhân sự                                       |
|     Đối chiếu danh sách người dùng đang active với danh sách nhân sự thực tế   |
|     từ Khối Nhân sự. Đánh dấu khóa các nhân viên đã nghỉ việc.                |
|                                                                               |
| [X] Bước 2: Kiểm tra Sự phù hợp của Vai trò                                   |
|     Xác nhận vai trò truy cập có khớp với phòng ban hiện tại của nhân sự      |
|     không. Đánh dấu thu hồi quyền cũ của các nhân viên đã chuyển bộ phận.     |
|                                                                               |
| [X] Bước 3: Đánh giá Quyền hạn Đặc quyền                                      |
|     Xem xét các tài khoản có quyền Ghi (Write) hoặc quyền cấu hình hệ thống.  |
|     Hạ cấp xuống quyền Chỉ đọc (Read-only) nếu không còn nhu cầu thực tế.      |
|                                                                               |
| [X] Bước 4: Kiểm tra các Tài khoản ngưng hoạt động                            |
|     Định danh các tài khoản không phát sinh đăng nhập trong vòng 90 ngày.      |
|     Đưa vào danh sách vô hiệu hóa tạm thời.                                   |
|                                                                               |
| [X] Bước 5: Ký duyệt và Chuyển giao Thực thi                                  |
|     Ký xác nhận danh sách phê duyệt/thu hồi gửi về bộ phận IT Operations      |
|     để thực hiện cấu hình. Đảm bảo ticket thu hồi được đóng trong 48h.       |
+-------------------------------------------------------------------------------+
```

### Mẫu C: Báo cáo Kết quả Soát xét Quyền truy cập Hàng quý

```
================================================================================
              NGÂN HÀNG DIEUBANK - BÁO CÁO KẾT QUẢ SOÁT XÉT TRUY CẬP Q2
================================================================================
THÔNG TIN CHUNG
---------------
Chu kỳ soát xét: Q2 2026 (Từ ngày 01/04 đến ngày 15/06/2026)
Ngày lập báo cáo: 16/06/2026
Đơn vị thực hiện: Phòng Quản lý Rủi ro CNTT & Tuân thủ
Báo cáo gửi tới: Giám đốc Quản trị Rủi ro & Ủy ban Chỉ đạo Rủi ro CNTT

SỐ LIỆU TỔNG HỢP
----------------
Tổng số Hệ thống soát xét: 5 (Core Banking, SWIFT, AD, Mobile DB, ATM Controller)
Tổng số tài khoản được kiểm tra: 1.420
Tổng số tài khoản được tiếp tục phê duyệt: 1.362
Tổng số quyền hạn yêu cầu thu hồi/điều chỉnh: 58

CHI TIẾT THEO TỪNG HỆ THỐNG
---------------------------
1. Dịch vụ Active Directory:
   - Số tài khoản soát xét: 950
   - Yêu cầu thu hồi/khóa: 12 (Tài khoản hết hạn của nhà thầu bên thứ ba)
2. Hệ thống Core Banking T24:
   - Số tài khoản soát xét: 320
   - Yêu cầu thu hồi/khóa: 28 (Nhân viên chuyển bộ phận nhưng chưa cắt quyền cũ)
3. Cổng thanh toán SWIFT:
   - Số tài khoản soát xét: 12
   - Yêu cầu thu hồi/khóa: 0 (Đảm bảo tuân thủ 100%)
4. Cơ sở dữ liệu ứng dụng Mobile Banking:
   - Số tài khoản soát xét: 38
   - Yêu cầu thu hồi/khóa: 18 (Các tài khoản thử nghiệm của lập trình viên)

CÁC PHÁT HIỆN CHÍNH & KẾ HOẠCH HÀNH ĐỘNG
----------------------------------------
* Phát hiện Q2-IAM-01: Chậm trễ trong việc cắt quyền khi nhân viên chuyển bộ phận.
  - Nguyên nhân: Các đơn vị quản lý trực tiếp không gửi ticket yêu cầu khóa quyền 
    cũ khi luân chuyển nhân sự.
  - Biện pháp khắc phục: Khối Công nghệ thực hiện dự án kết nối tự động hệ thống HR 
    (Workday) với Active Directory để kích hoạt quy trình soát xét tự động khi thay 
    đổi mã phòng ban của nhân viên. Thời hạn: Q3 2026.

PHÊ DUYỆT BÁO CÁO
-----------------
Chữ ký CISO: [Đã ký điện tử]                      Ngày: 16/06/2026
Chữ ký CRO:  [Đã ký điện tử]                      Ngày: 16/06/2026
================================================================================
```
