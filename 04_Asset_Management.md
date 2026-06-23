# 04. Tiêu chuẩn Quản lý Tài sản

Ngân hàng DieuBank (DB) duy trì một cấu trúc quản lý tài sản thông tin chặt chẽ để đảm bảo rằng mọi tài sản CNTT đều được định danh, phân loại và bảo vệ dựa trên mức độ quan trọng.

---

## 1. Mô hình Đánh giá Mức độ Quan trọng Tài sản (Asset Criticality Model)

DieuBank đánh giá mức độ quan trọng của tài sản dựa trên ba thuộc tính bảo mật: **Tính bảo mật (Confidentiality - C)**, **Tính toàn vẹn (Integrity - I)**, và **Tính sẵn sàng (Availability - A)**. Mỗi thuộc tính được chấm điểm theo thang từ **1 (Thấp)** đến **3 (Cao)**.

### Tiêu chí Đánh giá Điểm (C - I - A)

| Điểm | Tính Bảo mật (C) | Tính Toàn vẹn (I) | Tính Sẵn sàng (A) |
| :---: | :--- | :--- | :--- |
| **3 (Cao)** | Tiết lộ trái phép gây ra thiệt hại nghiêm trọng về tài chính, uy tín thương hiệu hoặc bị xử phạt pháp lý nặng (ví dụ: thu hồi giấy phép, phạt tiền hàng tỷ VND). | Thay đổi trái phép dẫn đến tổn thất tài chính trực tiếp, gian lận hoặc lỗi hệ thống nghiêm trọng ngay lập tức. | Hệ thống ngừng hoạt động làm ngưng trệ hoàn toàn các hoạt động kinh doanh cốt lõi; không có giải pháp thủ công thay thế. RTO < 4 giờ. |
| **2 (Trung bình)**| Tiết lộ gây ra tác động vận hành vừa phải hoặc nhận các văn bản cảnh báo từ cơ quan quản lý. | Thay đổi gây mất nhất quán dữ liệu nhưng có thể khắc phục được bằng các nỗ lực thủ công vừa phải. | Hệ thống ngừng hoạt động gây trễ nải vận hành nhưng vẫn có kênh giao dịch thay thế khác. RTO từ 4 - 24 giờ. |
| **1 (Thấp)** | Tiết lộ có tác động không đáng kể; dữ liệu đã công khai hoặc ít nhạy cảm. | Thay đổi thông tin có tác động vận hành hoặc tài chính tối thiểu. | Ngừng hoạt động có tác động tối thiểu; hệ thống có thể offline >24 giờ mà không ảnh hưởng tới khách hàng. |

### Phương pháp Tính Mức độ Quan trọng Chung
Mức độ quan trọng chung của tài sản (Asset Criticality Level) được xác định bằng điểm số lớn nhất trong 3 thuộc tính ($Max(C, I, A)$):
*   **Trọng yếu (Critical - Điểm 3)**: Nếu bất kỳ thuộc tính C, I, hoặc A nào có điểm bằng 3.
*   **Cao (High - Điểm 2)**: Nếu điểm lớn nhất của 3 thuộc tính bằng 2.
*   **Tiêu chuẩn (Standard - Điểm 1)**: Nếu tất cả các thuộc tính đều bằng 1.

---

## 2. Mô hình Sở hữu Tài sản (Asset Ownership Model)

Mỗi tài sản thông tin bắt buộc phải có hai nhân sự chịu trách nhiệm quản lý để đảm bảo nguyên tắc phân tách nhiệm vụ và giải trình vận hành:

```
+-------------------------------------------------------------------------------+
|                               TÀI SẢN THÔNG TIN                               |
+-------------------------------------------------------------------------------+
                                        |
                   +--------------------+--------------------+
                   |                                         |
                   v                                         v
+------------------+------------------+   +------------------+------------------+
|      CHỦ SỞ HỮU NGHIỆP VỤ           |   |       NHÂN SỰ THỦ THƯ CNTT          |
|        (Business Owner)             |   |       (Technical Custodian)         |
|  - Trưởng bộ phận nghiệp vụ         |   |  - Quản trị viên hệ thống / DBA     |
|  - Sở hữu rủi ro & phân loại dữ liệu|   |  - Triển khai kiểm soát kỹ thuật    |
|  - Phê duyệt quyền truy cập         |   |  - Thực hiện sao lưu & vá lỗi       |
|  - Xác định yêu cầu nghiệp vụ       |   |  - Chịu sự giám sát của Risk / Sec  |
+-------------------------------------+   +-------------------------------------+
```

*   **Chủ sở hữu Nghiệp vụ (Business Owner)**: Thường là Trưởng bộ phận nghiệp vụ sử dụng hệ thống (ví dụ: Trưởng khối Bán lẻ, Giám đốc Tài chính). Nhân sự này chịu trách nhiệm về giá trị nghiệp vụ của tài sản, phê duyệt các yêu cầu cấp quyền truy cập, xác định vai trò người dùng, phân loại dữ liệu và chấp nhận rủi ro liên quan đến tài sản đó.
*   **Nhân sự Thủ thư CNTT (Technical Custodian)**: Thường là Quản trị viên hệ thống hoặc Quản trị viên cơ sở dữ liệu thuộc Khối CNTT (ví dụ: Trưởng nhóm vận hành Core Banking, DBA). Nhân sự này có trách nhiệm triển khai các kiểm soát kỹ thuật (mã hóa, sao lưu, quy tắc tường lửa) do Chủ sở hữu Nghiệp vụ phê duyệt, thực hiện các bản vá và duy trì thời gian hoạt động của hệ thống.

---

## 3. Tiêu chuẩn Phân loại Dữ liệu (Data Classification Standard)

DieuBank phân loại dữ liệu thành 5 cấp độ rõ rệt, tuân thủ các yêu cầu phân loại dữ liệu cá nhân theo **Nghị định 13/2023/NĐ-CP** (Dữ liệu Cá nhân Cơ bản và Nhạy cảm).

```
   +---------------------------------------------------------------------+
   |   RẤT GIỚI HẠN      | ví dụ: Khóa riêng tư HSM, Thông tin SWIFT     |
   +---------------------------------------------------------------------+
   |     GIỚI HẠN        | ví dụ: Dữ liệu cá nhân PII, Thẻ tín dụng     |
   +---------------------------------------------------------------------+
   |       MẬT           | ví dụ: Sơ đồ mạng, Báo cáo kiểm toán         |
   +---------------------------------------------------------------------+
   |     NỘI BỘ          | ví dụ: Quy trình SOPs, Danh bạ nhân viên     |
   +---------------------------------------------------------------------+
   |    CÔNG KHAI        | ví dụ: Biểu lãi suất công bố, Tờ rơi QC      |
   +---------------------------------------------------------------------+
```

### Chi tiết các Cấp độ Phân loại

#### Cấp độ 5: Rất Giới hạn (Highly Restricted)
*   **Mô tả**: Các bí mật mã hóa và tài sản vận hành gốc của toàn bộ ngân hàng. Tiết lộ hoặc xâm nhập trái phép sẽ làm sụp đổ ngay lập tức hệ thống an ninh hoặc gây tổn thất tài chính không thể phục hồi.
*   **Kiểm soát Truy cập**: Chỉ giới hạn cho các quản trị viên an ninh được chỉ định cụ thể. Yêu cầu xác thực bằng token cứng, cách ly vật lý, giám sát phiên làm việc thời gian thực và phê duyệt kép (nguyên tắc 4 mắt).
*   **Ví dụ**: Khóa riêng tư của thiết bị HSM (Hardware Security Module), thông tin tài khoản admin hệ thống SWIFT Alliance Gateway, khóa master giải mã cơ sở dữ liệu.

#### Cấp độ 4: Giới hạn (Restricted)
*   **Mô tả**: Dữ liệu giao dịch tài chính và thông tin định danh cá nhân của khách hàng. Việc tiếp cận và xử lý chịu sự điều chỉnh nghiêm ngặt của **Nghị định 13/2023/NĐ-CP** và **Thông tư 09/2020/TT-NHNN**.
*   **Kiểm soát Truy cập**: Áp dụng nguyên tắc Cần biết mới biết (Need-to-Know). Bắt buộc mã hóa khi lưu trữ và truyền tải. Sử dụng cơ chế che giấu dữ liệu động (Dynamic Data Masking) cho các nhân sự không có đặc quyền. Lưu trữ vết truy cập đầy đủ.
*   **Ví dụ**: Họ tên khách hàng, số CCCD/Hộ chiếu, dữ liệu sinh trắc học khuôn mặt/vân tay, số tài khoản, mã PIN, lịch sử giao dịch tiền gửi/vay, số thẻ tín dụng (PAN).

#### Cấp độ 3: Mật (Confidential)
*   **Mô tả**: Các tài sản trí tuệ nội bộ, chi tiết hạ tầng kỹ thuật và các tài liệu chiến lược. Việc tiết lộ ra bên ngoài sẽ mang lại lợi thế cho đối thủ cạnh tranh hoặc hỗ trợ tin tặc trong việc lên phương án tấn công DieuBank.
*   **Kiểm soát Truy cập**: Giới hạn trong các phòng ban chuyên trách hoặc cấp quản lý cụ thể. Tài liệu phải được đánh dấu bản quyền và đóng dấu nước (watermark).
*   **Ví dụ**: Sơ đồ kiến trúc mạng chi tiết, báo cáo kiểm toán nội bộ, kế hoạch mua bán sáp nhập (M&A) đang đàm phán, mô hình đánh giá điểm tín dụng nội bộ.

#### Cấp độ 2: Nội bộ (Internal)
*   **Mô tả**: Dữ liệu vận hành thông thường sử dụng trong hoạt động hàng ngày của ngân hàng. Việc tiết lộ ra ngoài có rủi ro thấp nhưng vẫn bị hạn chế để tránh sử dụng sai mục đích.
*   **Kiểm soát Truy cập**: Mở cho toàn bộ nhân viên chính thức và các nhà thầu được ủy quyền của ngân hàng.
*   **Ví dụ**: Các quy trình vận hành tiêu chuẩn (SOPs), ticket hỗ trợ kỹ thuật IT, danh bạ điện thoại nội bộ, bản tin nội bộ ngân hàng.

#### Cấp độ 1: Công khai (Public)
*   **Mô tả**: Thông tin đã được ban lãnh đạo phê duyệt để công bố rộng rãi ra công chúng. Không yêu cầu các biện pháp bảo mật kiểm soát truy cập.
*   **Kiểm soát Truy cập**: Không hạn chế. Có sẵn trên trang web hoặc các kênh truyền thông đại chúng.
*   **Ví dụ**: Biểu lãi suất tiết kiệm, biểu phí dịch vụ, tờ rơi quảng cáo sản phẩm, danh sách địa chỉ phòng giao dịch, báo cáo tài chính năm đã công bố.

---

## 4. Bảng Đăng ký Danh mục Tài sản (Trích xuất Mẫu)

Dưới đây là một phần danh mục tài sản thông tin trọng yếu đang được quản lý tại DieuBank.

*   **C**: Confidentiality | **I**: Integrity | **A**: Availability

| Mã Tài sản | Tên Tài sản | Loại Tài sản | Mô tả Chi tiết | Chủ nghiệp vụ (Business Owner) | Nhân sự Thủ thư (Custodian) | C | I | A | Phân loại Cấp độ | Cấp độ Dữ liệu |
| :--- | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **AST-01** | Core Banking (T24) | Phần mềm | Trình xử lý giao dịch và sổ cái chính | Giám đốc Vận hành | Trưởng nhóm IT Core | 3 | 3 | 3 | **Trọng yếu** | Giới hạn |
| **AST-02** | Customer DB (Oracle) | Dữ liệu | DB lưu trữ hồ sơ & PII khách hàng | Giám đốc Khối Bán lẻ | Trưởng nhóm DBA | 3 | 3 | 3 | **Trọng yếu** | Giới hạn |
| **AST-03** | SWIFT Gateway | Phần mềm / HW| Hệ thống tích hợp điện chuyển tiền quốc tế| Giám đốc Khối Nguồn vốn | Quản trị viên SWIFT | 3 | 3 | 3 | **Trọng yếu** | Rất Giới hạn |
| **AST-04** | Active Directory | Hạ tầng | Trình quản lý danh tính mạng nội bộ | Giám đốc Công nghệ | Trưởng nhóm Hệ thống | 3 | 3 | 3 | **Trọng yếu** | Mật |
| **AST-05** | SOC SIEM (Splunk) | Phần mềm | Hệ thống thu thập và tương quan sự kiện | Giám đốc ATTT (CISO) | Quản lý SOC | 2 | 3 | 2 | **Trọng yếu** | Mật |
| **AST-06** | Mobile Banking App | Phần mềm | Ứng dụng giao dịch trên điện thoại khách hàng| Giám đốc Khối Số | Trưởng nhóm Mobile Dev | 3 | 3 | 3 | **Trọng yếu** | Giới hạn |
| **AST-07** | Thiết bị HSM (Luna) | Phần cứng | Thiết bị ký và lưu trữ khóa mã hóa gốc | Giám đốc ATTT (CISO) | Quản trị viên An ninh | 3 | 3 | 3 | **Trọng yếu** | Rất Giới hạn |
| **AST-08** | ATM Controller Server | Phần mềm | Kết nối mạng lưới ATM của ngân hàng với Napas| Trưởng Trung tâm Thẻ | Trưởng nhóm IT ATM | 2 | 3 | 3 | **Trọng yếu** | Giới hạn |
| **AST-09** | Switch Core / Firewall | Phần cứng | Thiết bị định tuyến và lọc tường lửa chính | Giám đốc Công nghệ | Trưởng nhóm Mạng | 2 | 3 | 3 | **Trọng yếu** | Mật |
| **AST-10** | Kho dữ liệu (DWH) | Dữ liệu | Cơ sở dữ liệu phân tích báo cáo SQL | Trưởng phòng Phân tích | Trưởng nhóm kỹ thuật DWH | 2 | 2 | 2 | **Cao** | Mật |
