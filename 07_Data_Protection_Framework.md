# 07. Tiêu chuẩn Bảo mật Dữ liệu & Quyền riêng tư

Ngân hàng DieuBank (DB) ban hành Tiêu chuẩn Bảo mật Dữ liệu & Quyền riêng tư này nhằm bảo vệ thông tin khách hàng và đảm bảo tuân thủ đầy đủ **Nghị định 13/2023/NĐ-CP (Nghị định về Bảo vệ Dữ liệu Cá nhân - PDPD)** và **Thông tư 09/2020/TT-NHNN**.

---

## 1. Tuân thủ Nghị định 13/2023/NĐ-CP & Mô hình Đồng thuận

Theo Nghị định 13, dữ liệu cá nhân được phân loại thành **Dữ liệu Cá nhân Cơ bản** (ví dụ: họ tên, số điện thoại, địa chỉ) và **Dữ liệu Cá nhân Nhạy cảm** (ví dụ: lịch sử giao dịch ngân hàng, số dư tài khoản, dữ liệu sinh trắc học, thông tin thẻ tín dụng).

### Bản đồ Tuân thủ Nghị định 13 tại DieuBank

| Điều khoản Nghị định 13 | Nghĩa vụ Pháp lý bắt buộc | Biện pháp Kiểm soát Kỹ thuật của DieuBank | Bộ phận Chịu trách nhiệm |
| :--- | :--- | :--- | :--- |
| **Điều 9** | Sự đồng thuận rõ ràng, tự nguyện, bằng văn bản hoặc định dạng điện tử của chủ thể trước khi xử lý. | Thiết lập Cờ Đồng thuận Kỹ thuật (Consent Flag) trong Core DB; khách hàng có quyền bật/tắt quyền riêng tư trên Mobile App. | Nhân sự DPO / Khối Bán lẻ |
| **Điều 16** | Đảm bảo quyền của chủ thể dữ liệu (Quyền truy cập, chỉnh sửa, hạn chế và yêu cầu xóa dữ liệu). | Xây dựng API kết nối từ Mobile App trực tiếp đến Core DB để tự động hóa các yêu cầu rút đồng thuận/xóa dữ liệu. | Nhân sự DPO / Khối CNTT |
| **Điều 28** | Bổ nhiệm nhân sự bảo vệ dữ liệu (DPO), thành lập bộ phận chuyên trách, bảo vệ dữ liệu nhạy cảm. | Thành lập Văn phòng Bảo vệ Dữ liệu Cá nhân, triển khai mã hóa mức cột (column-level) trong database. | Tổng Giám đốc (CEO) |
| **Điều 38** | Thực hiện Đánh giá Tác động Xử lý Dữ liệu Cá nhân (DPIA) và nộp hồ sơ lên Bộ Công an. | Lập hồ sơ DPIA chi tiết theo mẫu của Bộ Công an, nộp về Cục An ninh mạng và Phòng chống tội phạm công nghệ cao (A05). | Nhân sự DPO |
| **Điều 38 (Mục 2)**| Đánh giá tác động khi chuyển dữ liệu cá nhân ra nước ngoài. | Khóa toàn bộ dữ liệu giao dịch và thông tin định danh khách hàng trong phạm vi biên giới địa lý Việt Nam. | CISO / Nhân sự DPO |

---

## 2. Tiêu chuẩn Mã hóa Dữ liệu (Encryption Standard)

DieuBank bắt buộc áp dụng các cơ chế mã hóa để bảo vệ dữ liệu khách hàng trong suốt vòng đời:

```
  [ DỮ LIỆU TRUYỀN TẢI ]               [ DỮ LIỆU LƯU TRỮ ]                [ QUẢN LÝ KHÓA MẬT MÃ ]
  Giao thức TLS 1.3                   Transparent Data Encryption (TDE)  Luna Network HSM (FIPS 140-2)
  Mã hóa AES-256-GCM                  Mã hóa sao lưu AES-256             Ủy thác smartcard cho Custodians
```

### Mã hóa Dữ liệu khi Truyền tải (Data in Transit)
*   **Kết nối Bên ngoài (External)**: Bắt buộc sử dụng giao thức **TLS 1.3** cho toàn bộ lưu lượng công cộng kết nối đến API Gateway của ứng dụng Mobile Banking và cổng Internet Banking. Vô hiệu hóa hoàn toàn các giao thức cũ kém an toàn (TLS 1.0, TLS 1.1) và các cipher suite yếu.
*   **Kết nối Nội bộ (Internal)**: Lưu lượng truyền tải giữa các máy chủ ứng dụng và máy chủ cơ sở dữ liệu chứa dữ liệu Giới hạn bắt buộc sử dụng giao thức TLS 1.2 với thuật toán mã hóa AES-256-GCM.
*   **Mạng lưới Thanh toán**: Các giao dịch chuyển tiền điện tử SWIFT và cổng Napas được thực hiện qua các kênh truyền bảo mật chuyên dụng IPSec VPN sử dụng thiết bị mã hóa phần cứng.

### Mã hóa Dữ liệu khi Lưu trữ (Data at Rest)
*   **Mã hóa Cơ sở Dữ liệu**: Triển khai giải pháp Transparent Data Encryption (TDE) của Oracle cho toàn bộ cơ sở dữ liệu Core Banking Temenos T24. Các bảng chứa thông tin thẻ thanh toán (PAN) hoặc thông tin sinh trắc học bắt buộc sử dụng mã hóa mức cột (column-level encryption).
*   **Mã hóa Sao lưu**: Các tệp tin sao lưu dữ liệu hệ thống bắt buộc phải được mã hóa bằng thuật toán AES-256 trước khi xuất ra băng từ hoặc đẩy về các thiết bị lưu trữ thứ cấp. Kích hoạt mã hóa ổ đĩa vật lý (BitLocker) trên toàn bộ máy chủ ảo hóa và hệ thống SAN.

---

## 3. Tiêu chuẩn Quản lý Khóa Mật mã (Key Management)

Khóa giải mã dữ liệu phải được quản lý độc lập, tách biệt khỏi quyền hạn của các quản trị viên cơ sở dữ liệu (DBA):
*   **Cô lập Khóa**: Toàn bộ các khóa mã hóa master (Master Key) được tạo ra và lưu trữ an toàn bên trong thiết bị HSM đạt chuẩn bảo mật **FIPS 140-2 Level 3** (Luna Network HSM). Hệ thống cơ sở dữ liệu chỉ được gọi khóa thông qua các API xác thực bằng chứng chỉ số.
*   **Ủy thác Khóa**: Chỉ định ba nhân sự giữ khóa mật mã (từ phòng An toàn Thông tin, Quản lý Rủi ro CNTT, và Hạ tầng CNTT). Mọi buổi lễ thực hiện chức năng quản trị khóa (như sao lưu hoặc khôi phục cấu hình HSM) yêu cầu sự có mặt đồng thời của ít nhất hai nhân sự thông qua việc quẹt thẻ thông minh vật lý (mô hình M-of-N).
*   **Chu kỳ Xoay vòng Khóa**:
    *   *Khóa mã hóa Master*: Tự động xoay vòng 12 tháng một lần.
    *   *Khóa phiên hệ thống (Session Key)*: Tự động xoay vòng 3 tháng một lần.

---

## 4. Tiêu chuẩn Che giấu Dữ liệu (Data Masking Standard)

Để ngăn ngừa lộ lọt dữ liệu khách hàng trong vận hành hàng ngày, DieuBank triển khai hai cơ chế che giấu dữ liệu:

### Che giấu Dữ liệu Tĩnh (Static Data Masking - SDM)
Nghiêm cấm sử dụng dữ liệu thật của khách hàng trên các môi trường thử nghiệm (Phát triển, Kiểm thử QA, Đào tạo).
*   **Thực hiện**: Cơ sở dữ liệu sản xuất trước khi chuyển về môi trường thử nghiệm phải được xử lý tự động qua công cụ che giấu dữ liệu tĩnh (Informatica). Tên khách hàng sẽ được thay đổi ngẫu nhiên, số điện thoại bị xáo trộn và số dư tài khoản được thiết lập về các giá trị giả lập tiêu chuẩn.

### Che giấu Dữ liệu Động (Dynamic Data Masking - DDM)
DDM thực hiện che giấu dữ liệu theo thời gian thực (real-time) dựa trên quyền hạn truy cập Active Directory của nhân sự đang đăng nhập.

| Nhóm Người dùng AD / Vai trò | Trường dữ liệu Che giấu | Hiển thị Thực tế trên Màn hình | Logic Che giấu Áp dụng |
| :--- | :--- | :--- | :--- |
| **Giao dịch viên Chi nhánh** | Số thẻ tín dụng (PAN) | `4111-XXXX-XXXX-8888` | Chỉ hiển thị 4 số đầu và 4 số cuối. |
| **Điện thoại viên Call Center**| Số CCCD / Hộ chiếu | `******8972` | Chỉ hiển thị 4 chữ số cuối cùng. |
| **Chuyên viên Duyệt vay** | Số điện thoại khách hàng | `090******3` | Chỉ hiển thị 3 số đầu và 1 số cuối. |
| **Kiểm toán viên Bên ngoài** | Lịch sử Giao dịch chi tiết | `[ĐÃ LƯỢC BỎ]` | Ấn giấu toàn bộ trường nếu ngoài phạm vi. |

---

## 5. Tiêu chuẩn Lưu giữ & Xóa Dữ liệu

### Danh mục Thời gian Lưu giữ Dữ liệu

Để đáp ứng đồng thời yêu cầu của Thông tư 09 (phục vụ truy vết sự cố) và Luật Kế toán Việt Nam, dữ liệu tại DieuBank được lưu trữ theo lịch trình sau:

| Danh mục Dữ liệu | Thời gian Lưu giữ tối thiểu | Cơ sở Pháp lý quy định |
| :--- | :---: | :--- |
| **Hồ sơ thông tin Khách hàng (PII)** | Suốt thời gian sử dụng + 5 năm | Luật Phòng chống rửa tiền (AML) |
| **Sổ cái Giao dịch Tài chính** | 10 năm | Luật Kế toán Việt Nam |
| **Nhật ký truy cập Active Directory**| 12 tháng | Khoản 2 Điều 22 Thông tư 09/2020 |
| **Nhật ký sự cố an ninh trên SIEM** | 12 tháng | Khoản 2 Điều 22 Thông tư 09/2020 |
| **Hình ảnh Camera giám sát DC** | 3 tháng | Khoản 2 Điều 20 Thông tư 09/2020 |
| **Bản sao lưu cơ sở dữ liệu T24** | 5 năm | Quy định nội bộ phục vụ thanh tra tài chính |

### Quy trình Tiêu hủy & San hóa Dữ liệu (Data Sanitization)
Khi hết thời hạn lưu trữ hoặc nhận được yêu cầu xóa dữ liệu hợp lệ từ phía khách hàng:
1.  **Xóa logic (Soft Delete)**: Cập nhật trạng thái đồng thuận trên cơ sở dữ liệu hoạt động thành "Đã rút đồng thuận", vô hiệu hóa tài khoản giao dịch trên hệ thống live.
2.  **San hóa phương tiện lưu trữ**: Các ổ đĩa cứng trước khi tái sử dụng hoặc chuyển giao mục đích sử dụng phải được ghi đè dữ liệu theo tiêu chuẩn **NIST SP 800-88 Rev 1** (ghi đè 3 lượt dữ liệu ngẫu nhiên).
3.  **Tiêu hủy vật lý**: Các ổ đĩa cứng bị hỏng vật lý hoặc thiết bị lưu trữ chứa thông tin Giới hạn khi thanh lý bắt buộc phải được khử từ (degauss) bằng máy chuyên dụng và nghiền nhỏ bởi nhà thầu tiêu hủy chuyên nghiệp, có biên bản xác nhận tiêu hủy vật lý đính kèm chữ ký chứng kiến của CISO.
