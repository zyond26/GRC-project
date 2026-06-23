# 13. Cẩm nang Chuẩn bị Phỏng vấn

Tài liệu này chuẩn bị cho bạn cách giới thiệu và bảo vệ các giải pháp của dự án IT GRC này trước các nhà tuyển dụng khi phỏng vấn các vị trí Quản lý Rủi ro CNTT, Kiểm toán An toàn Thông tin, Cyber GRC, hoặc Chuyên viên Tuân thủ ngân hàng.

---

## 1. Kịch bản Giới thiệu Dự án (Project Walkthrough)

*Sử dụng kịch bản này khi nhà tuyển dụng yêu cầu: "Hãy giới thiệu về dự án GRC nổi bật trên CV của bạn."*

> "Dự án nổi bật gần đây của tôi là xây dựng và triển khai **Khung Tuân thủ IT GRC Tích hợp** cho **Ngân hàng DieuBank (DB)**, một ngân hàng thương mại quy mô trung bình đến lớn tại Việt Nam phục vụ khoảng 2,5 triệu khách hàng cá nhân.
>
> Mục tiêu cốt lõi của dự án là hợp nhất các tiêu chuẩn quốc tế—bao gồm **ISO/IEC 27001:2022** và **ISO/IEC 27005:2022**—với các văn bản pháp luật nghiêm ngặt của Việt Nam trong lĩnh vực ngân hàng và bảo mật dữ liệu, cụ thể là **Thông tư 09/2020/TT-NHNN** của Ngân hàng Nhà nước, **Nghị định 13/2023/NĐ-CP** về Bảo vệ Dữ liệu Cá nhân, và **Luật An ninh mạng 2018**.
>
> Trong dự án này, tôi đã trực tiếp thiết lập một khung kiểm soát an ninh tích hợp bao trùm toàn bộ hạ tầng công nghệ lõi như hệ thống Core Banking Temenos T24, cổng SWIFT Alliance Gateway, và cơ sở dữ liệu Oracle lưu trữ thông tin khách hàng.
>
> Các kết quả bàn giao chính của dự án bao gồm: Ma trận ánh xạ tuân thủ gồm 50 kiểm soát chính, mô hình phân cấp và sở hữu tài sản thông tin, Sổ đăng ký rủi ro công nghệ theo tiêu chuẩn ISO 27005 với 30 kịch bản thực tế, Tiêu chuẩn kiểm soát truy cập đặc quyền PAM và xác thực đa yếu tố MFA, Tiêu chuẩn mã hóa và che giấu dữ liệu đáp ứng Nghị định 13, Quy trình vận hành SOC với 20 quy tắc SIEM viết bằng mã Splunk SPL, Kế hoạch ứng cứu sự cố an ninh mạng (playbooks cho Ransomware, rò rỉ dữ liệu) và Kế hoạch liên tục kinh doanh BCP/DRP đảm bảo các chỉ số khôi phục RTO/RPO khắt khe của ngân hàng.
>
> Nhờ việc tích hợp này, DieuBank đã loại bỏ hoàn toàn các hoạt động kiểm tra kiểm soát trùng lặp, tối ưu hóa thời gian chuẩn bị cho các đợt thanh tra của NHNN, và đạt trạng thái sẵn sàng cao trước kỳ đánh giá chứng nhận ISO 27001."

---

## 2. Các câu chuyện phỏng vấn theo Phương pháp STAR

### Tình huống 1: Triển khai Tuân thủ Nghị định 13/2023/NĐ-CP về Bảo vệ Dữ liệu Cá nhân

*   **S - Tình huống (Situation)**: Ngân hàng DieuBank cần điều chỉnh toàn bộ các hệ thống thu thập thông tin khách hàng để tuân thủ Nghị định 13/2023/NĐ-CP mới ban hành. Vi phạm có thể bị phạt tới 5% tổng doanh thu và đình chỉ các kênh số.
*   **T - Nhiệm vụ (Task)**: Với vai trò Trưởng nhóm Tuân thủ GRC, nhiệm vụ của tôi là thiết kế khung kỹ thuật bảo vệ quyền riêng tư và tích hợp trực tiếp vào hệ thống quản lý an ninh ISO 27001 hiện tại để tránh xung đột hoặc trùng lặp công việc cho đội ngũ vận hành.
*   **A - Hành động (Action)**:
    1.  Tôi đã phân loại toàn bộ kho dữ liệu của ngân hàng thành Dữ liệu cá nhân Cơ bản và Nhạy cảm theo định nghĩa của luật.
    2.  Xây dựng **Ma trận Ánh xạ Tuân thủ** liên kết 50 điểm kiểm soát ISO 27001 với các nghĩa vụ pháp lý của Nghị định 13 về sự đồng thuận của khách hàng (Điều 9) và quyền yêu cầu xóa dữ liệu (Điều 16).
    3.  Chỉ đạo triển khai giải pháp Che giấu dữ liệu tĩnh (Static Data Masking) tự động trên môi trường phát triển và che giấu dữ liệu động (Dynamic Data Masking) che số thẻ, số điện thoại của khách hàng hiển thị trên màn hình giao dịch viên tại quầy.
    4.  Soạn thảo và phối hợp với DPO nộp thành công Hồ sơ Đánh giá Tác động Bảo vệ Dữ liệu Cá nhân (DPIA) lên Cục An ninh mạng (A05) Bộ Công an đúng thời hạn quy định.
*   **R - Kết quả (Result)**: Ngân hàng DieuBank vượt qua kỳ thanh tra tuân thủ dữ liệu cá nhân của Bộ Công an với kết quả Đạt 100%, không phát sinh bất kỳ khoản phạt nào. Tính năng che giấu dữ liệu giúp triệt tiêu hoàn toàn nguy cơ rò rỉ thông tin khách hàng từ nội bộ qua màn hình chụp của giao dịch viên.

---

### Tình huống 2: Đánh giá Rủi ro Công nghệ theo ISO 27005 (Mã độc Tống tiền trên Core Banking)

*   **S - Tình huống (Situation)**: Trong kỳ rà soát an ninh định kỳ, chúng tôi phát hiện hệ thống Core Banking Temenos T24 chạy hệ điều hành chưa được cập nhật bản vá lỗ hổng lớn và thiếu phân vùng mạng bảo vệ độc lập, dẫn đến nguy cơ nhiễm ransomware mức độ rủi ro tiềm tàng "Cao" (điểm 15/25), vượt khẩu vị rủi ro cho phép.
*   **T - Nhiệm vụ (Task)**: Tôi chịu trách nhiệm dẫn dắt hoạt động đánh giá rủi ro theo tiêu chuẩn ISO 27005 và xây dựng kế hoạch hành động khắc phục (CAP) để đưa mức rủi ro còn lại về ngưỡng an toàn.
*   **A - Hành động (Action)**:
    1.  Tính toán điểm rủi ro dựa trên thang đo $5 \times 5$ kết hợp tần suất xuất hiện mã độc tống tiền trong nước và tác động tài chính/vận hành nếu sập lõi ngân hàng.
    2.  Thiết lập kế hoạch khắc phục bao gồm 3 kiểm soát kỹ thuật chính: Triển khai giải pháp phát hiện và ứng phó điểm cuối CrowdStrike EDR, tách biệt mạng máy chủ database core khỏi các vùng mạng phát triển và người dùng thông qua tường lửa, và xây dựng vùng lưu trữ sao lưu cô lập bất biến offline (immutable backup).
    3.  Chỉ đạo phối hợp giữa đội ngũ System và Network để triển khai các kiểm soát và tính toán lại điểm rủi ro còn lại.
*   **R - Kết quả (Result)**: Mức rủi ro còn lại giảm từ 15 (Cao) xuống còn 5 (Trung bình) nằm trong giới hạn khẩu vị rủi ro của ngân hàng. Đợt diễn tập khôi phục thảm họa sau đó chứng minh hệ thống có khả năng phục hồi dữ liệu từ bản sao lưu bất biến sạch mã độc trong vòng 3 giờ 20 phút, vượt mục tiêu RTO < 4 giờ đề ra.

---

### Tình huống 3: Phát hiện và Khắc phục Lỗi Kiểm toán (Tài khoản Nhà thầu nghỉ việc vẫn active)

*   **S - Tình huống (Situation)**: Đợt kiểm toán nội bộ phát hiện có 4 tài khoản Active Directory thuộc về các nhà thầu phát triển phần mềm bên thứ ba đã kết thúc dự án và nghỉ việc 14 ngày trước đó nhưng tài khoản vẫn ở trạng thái hoạt động, trong đó có 1 tài khoản phát sinh đăng nhập vào hệ thống test sau khi nghỉ việc.
*   **T - Nhiệm vụ (Task)**: Nhiệm vụ của tôi là tiến hành Phân tích Nguyên nhân Gốc rễ (RCA) và lập Kế hoạch Hành động Khắc phục (CAP) để giải quyết dứt điểm điểm yếu kiểm soát này.
*   **A - Hành động (Action)**:
    1.  Tôi đã thực hiện điều tra và phát hiện nguyên nhân gốc rễ: Tài khoản nhân viên nhà thầu do Phòng Mua sắm (Procurement) quản lý trên các file Excel thủ công, không nằm trong quy trình nhân sự JML tự động của Khối Nhân sự (HR). Khi nhà thầu hết hạn dự án, không có thông báo tự động nào gửi về ban IT để khóa tài khoản.
    2.  Yêu cầu khóa khẩn cấp 4 tài khoản bị phát hiện ngay lập tức.
    3.  Soạn thảo kế hoạch CAP yêu cầu Phòng Mua sắm phải nhập toàn bộ thông tin nhà thầu vào hệ thống nhân sự tập trung Workday.
    4.  Làm việc với đội ngũ System viết một script tự động chạy hàng ngày đối soát ngày kết thúc hợp đồng trên Workday để tự động khóa tài khoản AD tương ứng.
*   **R - Kết quả (Result)**: Trong các đợt kiểm tra sau đó, 100% tài khoản nhà thầu thôi việc được tự động vô hiệu hóa đúng thời hạn SLA (trước 17:00 của ngày làm việc cuối cùng), giảm tỷ lệ tài khoản mồ côi (orphaned accounts) về 0%.

---

## 3. Câu hỏi Phỏng vấn GRC Ngân hàng thường gặp & Câu trả lời Xuất sắc

### Câu hỏi 1: Bạn thực hiện Đánh giá Rủi ro CNTT trong dự án này như thế nào?
*   **Trả lời**:
    > "Tôi thực hiện đánh giá rủi ro công nghệ bám sát theo hướng dẫn của tiêu chuẩn **ISO/IEC 27005:2022**. Đầu tiên, tôi thiết lập bối cảnh dự án dựa trên việc căn chỉnh phạm vi kiểm soát với Khẩu vị Rủi ro của Hội đồng Quản trị DieuBank. 
    > 
    > Sau đó, tôi tiến hành nhận diện rủi ro bằng cách xác định các mối đe dọa (như ransomware, gian lận thanh toán, rò rỉ dữ liệu) và các điểm yếu hệ thống đối chiếu với Danh mục tài sản CNTT. 
    > 
    > Tôi phân tích điểm rủi ro tiềm tàng của 30 kịch bản rủi ro ngân hàng thực tế bằng ma trận $5 \times 5$ Likelihood x Impact. Điểm tác động được lượng hóa cụ thể bằng thiệt hại tài chính tiền mặt, thời gian ngừng hoạt động hệ thống (downtime) và mức phạt hành chính theo quy định của Nghị định 13. 
    > 
    > Đối với các rủi ro vượt quá khẩu vị an toàn, tôi thiết lập kế hoạch xử lý rủi ro (Risk Treatment Plan) bằng cách đề xuất các biện pháp kiểm soát kỹ thuật bổ sung và tính toán lại điểm rủi ro còn lại để đảm bảo rủi ro của ngân hàng luôn ở ngưỡng kiểm soát an toàn."

---

### Câu hỏi 2: Cách bạn ánh xạ các quy định pháp lý của Việt Nam như thế nào?
*   **Trả lời**:
    > "Tôi đã xây dựng một **Ma trận Ánh xạ Tuân thủ Tích hợp** bằng Markdown. Tôi sử dụng **ISO/IEC 27001:2022** làm khung xương sống vì đây là tiêu chuẩn quốc tế toàn diện nhất về quản lý an toàn thông tin. 
    > 
    > Từ mỗi điểm kiểm soát ISO, tôi ánh xạ trực tiếp sang các quy định tương đương của Việt Nam: cụ thể là các Điều khoản của **Thông tư 09/2020/TT-NHNN** quy định về an toàn hệ thống thông tin ngân hàng, **Nghị định 13/2023/NĐ-CP** quy định về nghĩa vụ bảo vệ dữ liệu cá nhân, và **Luật An ninh mạng 2018** quy định về lưu trữ dữ liệu trong nước và báo cáo sự cố khẩn cấp. 
    > 
    > Ví dụ, đối với kiểm soát quản trị tài khoản đặc quyền (ISO A.5.18), tôi ánh xạ với yêu cầu về tài khoản quản trị hệ thống tại Điều 16 Thông tư 09 và quy định ghi nhật ký xử lý dữ liệu cá nhân nhạy cảm tại Điều 26 Nghị định 13. 
    > 
    > Việc này giúp chúng tôi xác định rõ ràng một bộ bằng chứng duy nhất cần thu thập (như file cấu hình, log hệ thống, chính sách đã duyệt) để đáp ứng cùng lúc nhiều đoàn kiểm tra khác nhau, loại bỏ hoàn toàn việc kiểm thử trùng lặp."

---

### Câu hỏi 3: Làm thế nào để bạn thuyết trình rủi ro công nghệ phức tạp cho Ban Giám đốc không có chuyên môn kỹ thuật?
*   **Trả lời**:
    > "Khi báo cáo trước Ban Giám đốc hoặc CRO, tôi tuyệt đối không sử dụng các thuật ngữ kỹ thuật phức tạp như mã CVE, luật firewall hay các dòng code logs. Thay vào đó, tôi dịch rủi ro công nghệ sang **ngôn ngữ kinh doanh và tác động tài chính**.
    > 
    > Tôi tập trung vào ba yếu tố:
    > 1.  **Thiệt hại Tài chính**: Ước lượng số tiền ngân hàng bị tổn thất nếu hệ thống ngừng hoạt động (ví dụ: số lượng giao dịch thanh toán bị gián đoạn mỗi giờ) hoặc mức phạt tối đa 5% doanh thu của Nghị định 13 nếu lộ dữ liệu.
    > 2.  **Khả năng phục hồi (RTO/RPO)**: Giải thích hệ thống sẽ mất bao lâu để chạy lại bình thường và lượng dữ liệu tối đa bị mất là bao nhiêu.
    > 3.  **Chi phí đầu tư kiểm soát so với giá trị rủi ro**: Chứng minh việc chi ngân sách cho kiểm soát (ví dụ: mua hệ thống PAM) sẽ giúp ngân hàng tránh được thiệt hại lớn hơn gấp nhiều lần nếu sự cố xảy ra.
    > 
    > Tôi sử dụng trực quan hóa như Bản đồ nhiệt rủi ro $5 \times 5$ để chỉ ra các điểm nóng rủi ro hiện tại và biểu đồ xu hướng rủi ro còn lại qua các tháng để Ban Giám đốc nhìn thấy rõ tiến trình cải thiện an ninh."
