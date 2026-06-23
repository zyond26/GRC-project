# 12. Giao diện Dashboard & Báo cáo Quản trị

Ngân hàng DieuBank (DB) sử dụng các bảng điều khiển trực quan để báo cáo định kỳ trạng thái rủi ro, tuân thủ pháp lý và an toàn thông tin cho Ủy ban Chỉ đạo Rủi ro CNTT và Hội đồng Quản trị.

---

## 1. Bảng điều khiển Rủi ro CNTT (IT Risk Dashboard)

Bảng điều khiển này theo dõi danh mục rủi ro hoạt động của DieuBank so với khẩu vị rủi ro đã được phê duyệt.

```
================================================================================
                    NGÂN HÀNG DIEUBANK - BẢNG ĐIỀU KHIỂN RỦI RO CNTT
================================================================================
TRẠNG THÁI KHẨU VỊ RỦI RO: [ TRONG GIỚI HẠN AN TOÀN ]   CẬP NHẬT: 16/06/2026
--------------------------------------------------------------------------------

[ BẢN ĐỒ NHIỆT RỦI RO ĐANG HOẠT ĐỘNG ]
  LIKELIHOOD ->
 5 | [0] [0] [0] [0] [0]       SỐ LƯỢNG RỦI RO PHÂN LOẠI:
 4 | [0] [4] [6] [1] [0]       - Nghiêm trọng (20-25): 0 Rủi ro
 3 | [2] [5] [7] [3] [0]       - Cao (10-16)        : 4 Rủi ro  [Đang Khắc phục]
 2 | [0] [1] [1] [0] [0]       - Trung bình (5-9)   : 14 Rủi ro [Giám sát]
 1 | [0] [0] [0] [0] [0]       - Thấp (1-4)         : 12 Rủi ro [Chấp nhận]
   +-------------------
     1   2   3   4   5  IMPACT ->

[ TOP 5 RỦI RO ĐANG XỬ LÝ & TIẾN ĐỘ ]
1. RSK-01: Ransomware tấn công Core T24 --- [ Cao ] ---- Đang xử lý (EDR đạt 85%)
2. RSK-13: Lỗi khôi phục sao lưu Core ----- [ Cao ] ---- Đang xử lý (Mở sandbox phục hồi)
3. RSK-03: Rò rỉ PII qua SQL Injection ---- [ T.Bình ] - Hoàn tất (Cấu hình luật WAF)
4. RSK-14: Xóa dữ liệu theo yêu cầu KH ---- [ T.Bình ] - Đang xử lý (Dev viết API xóa)
5. RSK-08: Lỗ hổng thư viện Mobile App ---- [ T.Bình ] - Hoàn tất (Tích hợp quét SBOM)

[ XU HƯỚNG ĐIỂM RỦI RO CÒN LẠI (6 Tháng qua) ]
Điểm số
 25 |
 20 | * (Tháng 1: Điểm rủi ro tiềm tàng ban đầu)
 15 |
 10 |                 *---------* (Tháng 3-4: Triển khai kiểm soát bổ sung)
  5 |                                     *---------* (Tháng 5-6: Điểm rủi ro còn lại)
  0 +--------------------------------------------------
      Tháng 1   Tháng 2   Tháng 3   Tháng 4   Tháng 5   Tháng 6
================================================================================
```

---

## 2. Bảng điều khiển Tuân thủ Pháp lý (Compliance Dashboard)

Bảng này giám sát sự phù hợp của hệ thống với các tiêu chuẩn bảo mật quốc tế và các quy định pháp luật Việt Nam.

```
================================================================================
                    NGÂN HÀNG DIEUBANK - BẢNG GIÁM SÁT TUÂN THỦ
================================================================================
ĐIỂM TUÂN THỦ TỔNG HỢP: [ 93.75% ]                  SẴN SÀNG KIỂM TOÁN: CÓ
--------------------------------------------------------------------------------

[ ĐIỂM TUÂN THỦ THEO TỪNG VĂN BẢN ]
- Đánh giá sẵn sàng chứng nhận ISO/IEC 27001:2022 -- [ 95% ] [================== ]
- Tuân thủ Thông tư 09/2020/TT-NHNN của NHNN ------ [ 92% ] [=================  ]
- Tuân thủ Bảo vệ Dữ liệu Cá nhân Nghị định 13 ----- [ 88% ] [================   ]
- Tuân thủ Luật An ninh mạng Việt Nam 2018 -------- [100% ] [====================]

[ QUẢN LÝ CÁC PHÁT HIỆN KIỂM TOÁN ]
Số lỗi kiểm toán đang mở: 3                         Số lỗi đã khắc phục đóng (YTD): 18

- Mã lỗi: AUD-2026-001 (Tài khoản nhà thầu thôi việc) -- TRẠNG THÁI: [ MỞ ] - HẠN: 30/09/2026
- Mã lỗi: AUD-2026-002 (Lập trình viên xem DB thô) ---- TRẠNG THÁI: [ MỞ ] - HẠN: 31/07/2026
- Mã lỗi: AUD-2026-003 (Khóa master lưu trong config) - TRẠNG THÁI: [ MỞ ] - HẠN: 31/08/2026

[ CÁC MỐI MỐC KIỂM TOÁN QUAN TRỌNG ]
- Đánh giá lỗ hổng bảo mật bên ngoài Q2 ----------- [ HOÀN THÀNH ] (Ngày 15/05)
- Nộp hồ sơ đánh giá tác động DPIA lên Bộ Công an - [ HOÀN THÀNH ] (Ngày 01/06)
- Đánh giá ISO 27001 Stage 1 với tổ chức chứng nhận [ ĐÃ LÊN LỊCH ] (Ngày 10/07)
================================================================================
```

---

## 3. Bảng điều khiển Giám sát An ninh (SOC Dashboard)

Bảng này cung cấp thông tin về lưu lượng nhật ký nhận về, các sự cố đang xử lý và hiệu năng SOC.

```
================================================================================
                    NGÂN HÀNG DIEUBANK - BẢNG ĐIỀU HÀNH SOC & SIEM
================================================================================
TRẠNG THÁI HỆ THỐNG: [ HOẠT ĐỘNG ỔN ĐỊNH ]          LƯU LƯỢNG LOG: 420 GB/Ngày
--------------------------------------------------------------------------------

[ PHÂN LOẠI CẢNH BÁO TRONG 24H ]
Tổng số cảnh báo thô: 1.240   Cảnh báo giả (lọc): 1.118   Sự cố thực tế cần xử lý: 2

- Sự cố P1 (Nghiêm trọng): 0 sự cố đang hoạt động
- Sự cố P2 (Cao)         : 0 sự cố đang hoạt động
- Sự cố P3 (Trung bình)  : 1 đang điều tra (Mã độc máy trạm chi nhánh)
- Sự cố P4 (Thấp)        : 1 đang điều tra (Lệnh đăng nhập sai tăng đột biến)

[ THỜI GIAN ĐÁP ỨNG SLA CỦA SOC ]
Chỉ số đo lường            SLA Mục tiêu         Hiệu năng Thực tế      Trạng thái
- Thời gian Phát hiện:     < 10 Phút            7.2 Phút               [ ĐẠT ]
- Thời gian Phản ứng:      < 30 Phút            18.5 Phút              [ ĐẠT ]

[ PHẠM VI GIÁM SÁT AN NINH ]
- Tỷ lệ cài đặt Agent EDR trên máy trạm/máy chủ --- [ 99.8% ] [====================]
- Tỷ lệ đẩy log hệ thống về SIEM tập trung -------- [100.0% ] [====================]
- Trạng thái hoạt động tường lửa F5 WAF ----------- [100.0% ] [====================]
================================================================================
```

---

## 4. Bảng điều khiển Quyền riêng tư (Privacy Dashboard)

Bảng này giám sát các hoạt động bảo vệ dữ liệu cá nhân theo Nghị định 13 tại DieuBank.

```
================================================================================
              NGÂN HÀNG DIEUBANK - BẢNG GIÁM SÁT PRIVACY NGHỊ ĐỊNH 13
================================================================================
TRẠNG THÁI DPO: Đã đăng ký với Bộ Công an           HỒ SƠ DPIA: Đã nộp Bộ Công an
--------------------------------------------------------------------------------

[ THỐNG KÊ DỮ LIỆU CÁ NHÂN KHÁCH HÀNG ]
- Tổng số hồ sơ dữ liệu PII lưu trữ: 2.548.290
- Tỷ lệ mã hóa dữ liệu nhạy cảm (Sinh trắc/Thẻ): 100% Đã mã hóa lưu trữ
- Tỷ lệ Khách hàng đồng ý xử lý dữ liệu (Opt-In): 94.2%   Rút đồng ý (Opt-Out): 5.8%

[ KẾT QUẢ XỬ LÝ YÊU CẦU QUYỀN CHỦ THỂ (DSR) ]
Số yêu cầu nhận được trong Q2: 145                  Đã xử lý xong: 142  Đang xử lý: 3

- Yêu cầu truy cập dữ liệu  : 88 (Xử lý trung bình: 1.2 Ngày - SLA Mục tiêu < 3 Ngày)
- Yêu cầu xóa dữ liệu cá nhân: 54 (Xử lý trung bình: 2.1 Ngày - SLA Mục tiêu < 5 Ngày)
- Yêu cầu chỉnh sửa dữ liệu : 3  (Xử lý trung bình: 0.5 Ngày - SLA Mục tiêu < 2 Ngày)

[ TRẠNG THÁI AN TOÀN DỮ LIỆU MÔI TRƯỜNG THỬ NGHIỆM ]
- Tự động chạy job che giấu dữ liệu tĩnh (SDM) ---- [ ĐẠT ] (Hàng đêm lúc 01:00)
- Hoạt động che giấu dữ liệu động (DDM) ở quầy ---- [ ĐẠT ] (Kích hoạt trên T24 client)
================================================================================
```
