# 10. Kế hoạch Liên tục Kinh doanh & Phục hồi sau Thảm họa

Ngân hàng DieuBank (DB) ban hành Tiêu chuẩn Kế hoạch Liên tục Kinh doanh & Phục hồi sau Thảm họa (BCP/DRP) này để đảm bảo khả năng phục hồi vận hành và đáp ứng yêu cầu của **Điều 25 Thông tư 09/2020/TT-NHNN**.

---

## 1. Khung Kế hoạch Liên tục Kinh doanh (BCP)

Khung BCP đảm bảo DieuBank có thể duy trì hoạt động nghiệp vụ tối thiểu trong các sự kiện thảm họa thiên tai, mất điện diện rộng, sự cố hạ tầng hoặc tấn công mạng nghiêm trọng.

```
       +-------------------------------------------------------------+
       |                   BAN CHỈ ĐẠO KHỦNG HOẢNG (CMT)              |
       |  - Đồng Chủ tịch: Tổng Giám đốc (CEO) & Giám đốc Rủi ro (CRO)|
       |  - Thành viên: Giám đốc IT (CIO), CISO, Trưởng ban Thiết bị |
       |  - Thẩm quyền: Tuyên bố tình trạng thảm họa, kích hoạt DRP  |
       +------------------------------+------------------------------+
                                      |
                                      v
       +------------------------------+------------------------------+
       |                 TRUNG TÂM CHỈ HUY KHỦNG HOẢNG               |
       |  - Địa điểm Chính: Hội sở chính DieuBank (Quận 1, TP.HCM)    |
       |  - Địa điểm Dự phòng: Trung tâm dữ liệu DR Binh Dương        |
       +-------------------------------------------------------------+
```

### Vòng đời Điều hành Khủng hoảng
1.  **Ghi nhận**: Khi xảy ra sự cố lớn ở site chính, Ban Chỉ đạo Khủng hoảng (CMT) triệu tập khẩn cấp trong vòng 30 phút để đánh giá tình trạng hạ tầng kỹ thuật.
2.  **Kích hoạt**: Nếu hệ thống chính xác định không thể khôi phục trong vòng 1 giờ, CMT tuyên bố tình trạng thảm họa và ra lệnh chuyển mạch dữ liệu sang site dự phòng.
3.  **Thực thi**: Đội ngũ kỹ thuật vận hành tại site dự phòng DR thiết lập môi trường hoạt động và định tuyến lại luồng giao dịch của khách hàng.
4.  **Failback**: Sau khi khắc phục hoàn toàn sự cố tại Data Center chính, thực hiện đồng bộ hóa dữ liệu phát sinh và chuyển luồng giao dịch trở lại site chính một cách an toàn.

---

## 2. Bảng Phân tích BIA & Chỉ số RTO / RPO Mục tiêu

DieuBank xác định các chỉ số phục hồi đối với các hệ thống tài chính và dịch vụ cốt lõi:

*   **Thời gian Phục hồi Mục tiêu (Recovery Time Objective - RTO)**: Thời gian tối đa cho phép hệ thống ngừng hoạt động trước khi gây ra gián đoạn nghiệp vụ không thể chấp nhận.
*   **Điểm Phục hồi Mục tiêu (Recovery Point Objective - RPO)**: Mức độ mất mát dữ liệu tối đa cho phép tính bằng thời gian.

### Ma trận Chỉ tiêu Phục hồi hệ thống DieuBank

| Tên Hệ thống / Dịch vụ | Mức độ Quan trọng | RTO Mục tiêu | RPO Mục tiêu | Phương án Kỹ thuật Áp dụng |
| :--- | :---: | :---: | :---: | :--- |
| **Cổng Thanh toán SWIFT** | Trọng yếu | **2 Giờ** | **0 Phút** | Đồng bộ hóa thời gian thực qua Oracle Data Guard; thiết lập node dự phòng nóng (Active-Hot). |
| **Core Banking (T24)** | Trọng yếu | **4 Giờ** | **15 Phút**| Sao chép cận đồng bộ (trễ tối đa 10 giây) sang site dự phòng; lưu trữ nhật ký giao dịch liên tục. |
| **Ứng dụng Mobile Banking**| Trọng yếu | **4 Giờ** | **15 Phút**| Hạ tầng Gateway đám mây kết hợp cơ chế DNS Failover tự động trỏ về máy chủ dự phòng DR. |
| **Cổng Internet Banking** | Trọng yếu | **4 Giờ** | **15 Phút**| Cấu hình Dynamic DNS kết hợp cân bằng tải tường lửa WAF tại site dự phòng. |
| **Hệ thống Email Nội bộ** | Tiêu chuẩn | **12 Giờ** | **4 Hours** | Sử dụng dịch vụ lưu trữ đám mây của Microsoft Office 365 Exchange Online. |

---

## 3. Chiến lược Phục hồi Thảm họa (DR Strategy)

DieuBank vận hành mô hình khôi phục thảm họa song song:
*   **Trung tâm Dữ liệu Chính (Primary DC)**: Đặt tại TP. Hồ Chí Minh. Trung tâm đạt chuẩn quốc tế với hệ thống nguồn điện lưới dự phòng 3 lớp và kết nối cáp quang đa hướng của nhiều nhà mạng lớn.
*   **Trung tâm Dữ liệu Dự phòng (Disaster Recovery - DR Site)**: Đặt tại Tỉnh Bình Dương (cách DC chính ~45 km để tránh chung các rủi ro thảm họa diện rộng như ngập lụt, sập lưới điện vùng).
*   **Cơ chế Sao chép Dữ liệu**:
    *   *Giao dịch SWIFT*: Đồng bộ hóa thời gian thực (Synchronous replication). Giao dịch chỉ được ghi nhận thành công khi đã ghi đồng thời vào DB tại cả TP.HCM và Bình Dương.
    *   *Hệ thống Core T24*: Sử dụng công cụ Oracle Data Guard sao chép bất tuần tự tốc độ cao qua kênh truyền cáp quang tối (dark fiber) tốc độ 10 Gbps chuyên dụng.

---

## 4. Các Kịch bản Diễn tập Phục hồi Thảm họa (DR Drills)

Để tuân thủ yêu cầu diễn tập tối thiểu 2 lần/năm của Thông tư 09, DieuBank tổ chức các đợt diễn tập thảm họa thực tế theo 3 kịch bản:

### Kịch bản A: Mất điện hoàn toàn tại Data Center TP. Hồ Chí Minh

```
 [ PHÁT HIỆN ]                [ ĐÁNH GIÁ ]                  [ KÍCH HOẠT DRP ]            [ XÁC NHẬN ]
Mất điện lưới DC ----> Máy phát điện hỏng hóc ---> CMT Tuyên bố Thảm họa ----> Kích hoạt Core DB tại DR
Nhiệt độ phòng tăng    Ắc quy UPS cạn kiệt         Trỏ DNS giao dịch về DR     Napas kết nối thông suốt
```

*   **Tình huống giả định**: Mất điện lưới diện rộng tại khu vực đặt DC chính. Hệ thống máy phát điện dự phòng gặp sự cố kỹ thuật không khởi động, hệ thống ắc quy UPS cạn kiệt sau 15 phút, phòng máy chủ mất điện hoàn toàn.
*   **Các bước diễn tập thực tế**:
    1.  Cảnh báo mất kết nối gửi về SOC. CMT triệu tập khẩn cấp.
    2.  DBA kiểm tra trạng thái Oracle Data Guard (xác nhận lượng dữ liệu chưa đồng bộ tại Bình Dương có độ trễ < 10 giây).
    3.  Đội ngũ mạng thực hiện chuyển hướng IP định tuyến BGP trỏ toàn bộ lưu lượng giao dịch về dải IP của Data Center Bình Dương.
    4.  Quản trị viên DB thực hiện lệnh chuyển trạng thái cơ sở dữ liệu tại Bình Dương từ **Standby** sang **Primary** (lĩnh quyền điều hành chính).
    5.  Thực hiện giao dịch thử nghiệm thông qua Napas kết nối đến máy chủ Bình Dương để xác nhận dòng tiền thông suốt.
*   **Tiêu chí đạt**: Hệ thống khôi phục hoạt động hoàn toàn tại site dự phòng Bình Dương trong vòng **2 giờ 45 phút** (đạt mục tiêu RTO < 4 giờ) với sai lệch dữ liệu bằng 0.

### Kịch bản B: Đứt Cáp quang Kết nối SWIFT quốc tế
*   **Tình huống giả định**: Máy xúc thi công đường xá đào đứt toàn bộ bó cáp quang chính kết nối từ hội sở DieuBank ra hướng cáp biển quốc tế, làm mất kết nối toàn bộ hệ thống cổng SWIFT.
*   **Các bước diễn tập thực tế**:
    1.  Cảnh báo mất tín hiệu truyền thông kết nối SWIFT xuất hiện tại màn hình vận hành.
    2.  Đội ngũ kỹ sư mạng thực thi lệnh cấu hình lại router biên, chuyển hướng định tuyến gói tin SWIFT đi qua đường cáp quang dự phòng của nhà mạng thứ hai (đi theo hướng địa lý hoàn toàn khác).
    3.  Giao dịch viên thực hiện kiểm tra trạng thái ping và đẩy thử một điện chuyển tiền mẫu thành công.
*   **Tiêu chí đạt**: Quá trình chuyển mạch định tuyến dự phòng hoàn tất tự động/thủ công trong vòng **9 phút** (đạt SLA mục tiêu của SWIFT < 15 phút).

### Kịch bản C: Lỗi logic làm hỏng Cơ sở dữ liệu (Corruption)
*   **Tình huống giả định**: Lập trình viên chạy nhầm script cấu hình lỗi làm sai lệch trường số dư trên tài khoản database. Lỗi này tự động đồng bộ qua Oracle Data Guard làm hỏng luôn cơ sở dữ liệu tại site dự phòng Bình Dương.
*   **Các bước diễn tập thực tế**:
    1.  Xác nhận lỗi logic (Oracle Data Guard không thể tự ngăn lỗi logic của con người).
    2.  Tạm dừng ngay tiến trình sao chép dữ liệu giữa 2 site để bảo vệ phân vùng đĩa.
    3.  Truy cập hệ thống quản lý băng từ sao lưu, tìm kiếm bản sao lưu cơ sở dữ liệu sạch được tạo ra trước thời điểm chạy script lỗi 5 phút.
    4.  Thực hiện quy trình Point-in-Time Recovery (PITR) để khôi phục trạng thái database về đúng thời điểm an toàn.
    5.  Chạy đối soát tổng số dư để xác nhận tính chính xác.
*   **Tiêu chí đạt**: Khôi phục và làm sạch cơ sở dữ liệu thành công trong vòng **3 giờ 20 phút** (đạt mục tiêu RTO < 4 giờ).
