# 08. Tiêu chuẩn Vận hành An ninh (SOC) & SIEM

Ngân hàng DieuBank (DB) vận hành Trung tâm Vận hành An ninh (SOC) tập trung để đảm bảo khả năng giám sát liên tục và ứng phó sự cố kịp thời, đáp ứng yêu cầu của **Điều 22 Thông tư 09/2020/TT-NHNN** và kiểm soát **ISO/IEC 27001:2022 A.8.16**.

---

## 1. Mô hình Vận hành SOC tại DieuBank

DieuBank áp dụng **Mô hình SOC Lai (Hybrid SOC)**:
*   **Tuyến 1 (Triage - Phân loại cảnh báo)**: Thuê ngoài dịch vụ từ Đối tác Giám sát An ninh chuyên nghiệp (MSSP) vận hành 24/7/365 để thực hiện lọc và phân loại cảnh báo ban đầu, loại bỏ các cảnh báo giả (false positive).
*   **Tuyến 2 (Analysis - Điều tra chuyên sâu)**: Đội ngũ chuyên viên phân tích an ninh nội bộ làm việc tại Hội sở chính TP.HCM, chịu trách nhiệm chẩn đoán mã độc trên máy trạm, phân tích log chi tiết và xác nhận sự cố an ninh.
*   **Tuyến 3 (Response & Threat Hunting - Ứng phó & Săn tìm đe dọa)**: Các kỹ sư an ninh mạng cấp cao dẫn dắt quy trình cách ly hệ thống, điều tra dấu vết số (forensics), săn tìm mối đe dọa ẩn và phát triển quy tắc SIEM.

### Tích hợp Tình báo Đe dọa (Threat Intelligence)
Hệ thống SIEM (Splunk) của DieuBank tự động tích hợp thông tin đe dọa:
*   **Nguồn thông tin**: Cập nhật từ VNCERT/CC, Cục An toàn thông tin (AIS), cổng chia sẻ thông tin an ninh ngành ngân hàng của NHNN, và các nguồn dữ liệu thương mại toàn cầu (Recorded Future).
*   **Quy trình**: Các chỉ số độc hại (Indicators of Compromise - IoCs) bao gồm dải IP đen, mã băm tệp tin độc hại (SHA-256) và tên miền C2 được đẩy tự động hàng giờ vào SIEM để phục vụ đối soát vết với log hệ thống.

---

## 2. Tiêu chuẩn Ghi nhật ký & Giám sát Hệ thống

Để đảm bảo khả năng truy vết sau sự cố, toàn bộ hệ thống phải đẩy log tập trung về SIEM. Đồng bộ hóa thời gian toàn bộ hệ thống sử dụng máy chủ NTP Server HA nội bộ.

```
[ NGUỒN LOG ]                      [ GIAO THỨC TRUYỀN ]            [ SIEM TẬP TRUNG ]
AD Domain Controller ------------> Event Forwarding (WEC) -------> Splunk Enterprise
T24 Oracle Audit Logs -----------> Syslog-NG / TLS --------------> Splunk Indexers
Tường lửa / WAF / Mạng ----------> Syslog (Cổng 514) ------------> Splunk Indexers
Máy trạm người dùng -------------> Universal Forwarder ----------> Splunk Indexers
```

---

## 3. Danh sách Quy tắc Dò tìm SIEM (20 Quy tắc)

Các quy tắc sau được cấu hình và hoạt động thời gian thực trên hệ thống Splunk của DieuBank.

### Quy tắc 1: Tấn công Brute Force vào tài khoản Active Directory
*   **Mô tả**: Phát hiện hành vi dò quét mật khẩu hàng loạt trên hệ thống domain.
*   **Nguồn Log**: Windows Security Event Log trên máy chủ Domain Controller (Mã sự kiện 4625 - Đăng nhập thất bại).
*   **Mã truy vấn SPL**:
  ```spl
  index=security EventCode=4625
  | stats count by TargetUserName, SourceNetworkAddress
  | where count > 10
  ```
*   **Mức độ**: Trung bình
*   **Hành động Containment**: Tự động khóa tài khoản trong 30 phút; đẩy ticket cảnh báo về SOC Tuyến 1 để xác minh IP nguồn.

### Quy tắc 2: Impossible Travel (VPN Đăng nhập vị trí địa lý bất hợp lý)
*   **Mô tả**: Phát hiện tài khoản nhân viên bị lộ thông tin hoặc chia sẻ tài khoản xuyên biên giới.
*   **Nguồn Log**: Cisco VPN logs, nhật ký đăng nhập Microsoft Entra.
*   **Mã truy vấn SPL**:
  ```spl
  index=security sourcetype=vpn_logs
  | transaction User
  | eval travel_time_hours = (duration/3600)
  | where travel_time_hours < 4 AND distance_miles > 1000
  ```
*   **Mức độ**: Cao
*   **Hành động Containment**: Ngắt kết nối phiên VPN hoạt động; vô hiệu hóa tài khoản và gửi yêu cầu thay đổi mật khẩu khẩn cấp qua SMS/Email cho nhân sự.

### Quy tắc 3: Truy vấn trái phép dữ liệu PII khách hàng trong Oracle DB
*   **Mô tả**: Phát hiện tài khoản không được phân quyền cố tình xuất số lượng lớn hồ sơ dữ liệu khách hàng mật.
*   **Nguồn Log**: Nhật ký kiểm toán cơ sở dữ liệu Oracle Database (AST-02).
*   **Mã truy vấn SPL**:
  ```spl
  index=oracle sourcetype=oracle_audit Action="SELECT" ObjectName="CUSTOMER_PII"
  | where NOT (AD_Group="Credit_Evaluators" OR AD_Group="Customer_Service")
  | where count > 50
  ```
*   **Mức độ**: Nghiêm trọng
*   **Hành động Containment**: Ngắt kết nối cơ sở dữ liệu của tài khoản đó; khóa tài khoản Active Directory; báo cáo nhân sự DPO thực hiện điều tra rò rỉ.

### Quy tắc 4: Đánh cắp dữ liệu bằng kỹ thuật DNS Tunneling
*   **Mô tả**: Phát hiện máy trạm mã hóa dữ liệu thành các truy vấn DNS gửi ra ngoài để vượt qua tường lửa mạng.
*   **Nguồn Log**: Nhật ký máy chủ DNS Server (AST-04).
*   **Mã truy vấn SPL**:
  ```spl
  index=dns sourcetype=dns_logs query_type=TXT
  | eval char_len = len(query)
  | where char_len > 100
  | stats count by src_ip
  | where count > 200
  ```
*   **Mức độ**: Nghiêm trọng
*   **Hành động Containment**: Tự động cách ly máy trạm nguồn tại switch mạng; gửi lệnh EDR quét tiến trình mạng trên máy trạm.

### Quy tắc 5: Tạo mới tài khoản đặc quyền Domain Admin trái phép
*   **Mô tả**: Phát hiện tài khoản lạ được gán vào nhóm quản trị viên cao nhất hệ thống mà không qua quy trình thay đổi.
*   **Nguồn Log**: Windows Security Event Log (Mã sự kiện 4728 - Gán quyền thành viên vào nhóm bảo mật).
*   **Mã truy vấn SPL**:
  ```spl
  index=security EventCode=4728 TargetGroupName="Domain Admins"
  | where NOT (SubjectUserName="Admin_Provisioner_Service")
  ```
*   **Mức độ**: Nghiêm trọng
*   **Hành động Containment**: Tự động xóa tài khoản vừa được gán khỏi nhóm Domain Admins; khóa tài khoản AD của nhân sự thực hiện gán quyền; báo cáo trực tiếp CISO.

### Quy tắc 6: Đăng nhập Cổng SWIFT Alliance Gateway ngoài giờ làm việc
*   **Mô tả**: Phát hiện giao dịch viên kết nối hệ thống chuyển tiền quốc tế trong khung giờ rủi ro cao.
*   **Nguồn Log**: Hệ điều hành và ứng dụng máy chủ SWIFT Alliance.
*   **Mã truy vấn SPL**:
  ```spl
  index=swift sourcetype=swift_os_logs (EventCode=4624 OR Action="login")
  | eval current_time = strftime(_time, "%H:%M:%S")
  | where current_time > "20:00:00" OR current_time < "06:00:00"
  ```
*   **Mức độ**: Cao
*   **Hành động Containment**: Tạm khóa tài khoản SWIFT; yêu cầu cuộc gọi xác nhận bằng giọng nói (Voice verification) từ điện thoại viên trực ca.

### Quy tắc 7: Tấn công SQL Injection bị tường lửa WAF chặn
*   **Mô tả**: Giám sát và phát hiện các hành vi dò quét lỗ hổng ứng dụng Web Internet Banking.
*   **Nguồn Log**: Log tường lửa ứng dụng F5 WAF.
*   **Mã truy vấn SPL**:
  ```spl
  index=waf sourcetype=f5_waf signature_type="SQL-Injection" action="blocked"
  | stats count by client_ip, uri
  | where count > 5
  ```
*   **Mức độ**: Trung bình
*   **Hành động Containment**: Tự động thêm IP nguồn của kẻ tấn công vào danh sách chặn trên tường lửa ngoài biên trong 24 giờ.

### Quy tắc 8: Hành vi mã hóa file hàng loạt của Ransomware
*   **Mô tả**: Phát hiện tiến trình thay đổi tên file hàng loạt sang định dạng mã hóa (ví dụ: đuôi `.locked`).
*   **Nguồn Log**: Log kiểm soát thư mục chia sẻ file Windows (Event 5145).
*   **Mã truy vấn SPL**:
  ```spl
  index=security EventCode=5145 RelativeTargetName IN ("*.locked", "*.crypto", "*.wannacry")
  | stats count by SourceNetworkAddress
  ```
*   **Mức độ**: Nghiêm trọng
*   **Hành động Containment**: Vô hiệu hóa cổng switch mạng vật lý chứa IP nguồn; đẩy lệnh cách ly khẩn cấp qua agent EDR trên máy trạm.

### Quy tắc 9: Tạo tài khoản Administrator cục bộ trên máy trạm nhân viên
*   **Mô tả**: Phát hiện hành vi cố ý leo thang đặc quyền để tự cài đặt phần mềm không phê duyệt.
*   **Nguồn Log**: Windows Security Event Log (Mã sự kiện 4732 - Thêm tài khoản vào nhóm quản trị cục bộ).
*   **Mã truy vấn SPL**:
  ```spl
  index=security EventCode=4732 TargetGroupName="Administrators"
  | where NOT (SubjectUserName="SYSTEM")
  ```
*   **Mức độ**: Cao
*   **Hành động Containment**: Gửi lệnh EDR gỡ bỏ tài khoản admin cục bộ vừa tạo; thu hồi quyền kết nối mạng của máy trạm.

### Quy tắc 10: Máy chủ vùng phát triển kết nối trực tiếp đến Database Core
*   **Mô tả**: Phát hiện hành vi kết nối mạng vi phạm quy định phân vùng an toàn.
*   **Nguồn Log**: Log tường lửa vùng cơ sở dữ liệu (Database Firewall).
*   **Mã truy vấn SPL**:
  ```spl
  index=db_firewall Action="connection" src_zone="Development" dest_ip="10.10.1.50" port=1521
  ```
*   **Mức độ**: Nghiêm trọng
*   **Hành động Containment**: Tự động ngắt kết nối tại switch core; chặn vĩnh viễn IP máy chủ phát triển nguồn trên tường lửa.

### Quy tắc 11: Mất kết nối thiết bị ATM Controller
*   **Mô tả**: Phát hiện nguy cơ sập mạng kết nối ATM diện rộng hoặc thiết bị ATM bị phá hoại vật lý.
*   **Nguồn Log**: Nhật ký hệ thống ATM Controller (AST-08).
*   **Mã truy vấn SPL**:
  ```spl
  index=atm sourcetype=atm_controller "status=offline"
  | stats count by atm_id
  ```
*   **Mức độ**: Cao
*   **Hành động Containment**: Gửi thông báo khẩn cấp cho Trung tâm Thẻ; phối hợp với lực lượng bảo vệ chi nhánh gần nhất kiểm tra buồng ATM.

### Quy tắc 12: Giao dịch viên SWIFT liên tiếp thao tác lỗi
*   **Mô tả**: Phát hiện dấu hiệu gian lận chuyển tiền hoặc tài khoản giao dịch bị chiếm quyền.
*   **Nguồn Log**: Nhật ký ứng dụng chuyển tiền SWIFT.
*   **Mã truy vấn SPL**:
  ```spl
  index=swift_app status="FAILED"
  | stats count by operator_id
  | where count > 5
  ```
*   **Mức độ**: Nghiêm trọng
*   **Hành động Containment**: Khóa tạm thời kênh chuyển tiền của giao dịch viên; yêu cầu Trưởng phòng Thanh toán quốc tế đối soát hồ sơ giấy.

### Quy tắc 13: Phát hiện hành vi dumping bộ nhớ LSASS (Mimikatz)
*   **Mô tả**: Phát hiện tin tặc sử dụng công cụ để trích xuất mật khẩu dạng rõ từ bộ nhớ.
*   **Nguồn Log**: Nhật ký giám sát tiến trình Windows Sysmon (Mã 10 - ProcessAccess, TargetImage=lsass.exe).
*   **Mã truy vấn SPL**:
  ```spl
  index=security sourcetype=sysmon EventCode=10 TargetImage="*lsass.exe" GrantedAccess="0x1F1FFF"
  ```
*   **Mức độ**: Nghiêm trọng
*   **Hành động Containment**: Agent EDR thực hiện cô lập máy trạm khỏi mạng LAN ngay lập tức; kill tiến trình dump bộ nhớ.

### Quy tắc 14: Xóa tập tin số lượng lớn trên máy chủ sao lưu (Backup Node)
*   **Mô tả**: Phát hiện tin tặc cố tình phá hủy các bản sao lưu trước khi kích hoạt mã độc tống tiền.
*   **Nguồn Log**: Nhật ký kiểm toán phần mềm sao lưu (Veeam/Backup Audit logs).
*   **Mã truy vấn SPL**:
  ```spl
  index=backup Action="DELETE" OR Action="PURGE"
  | stats count by admin_user
  | where count > 50
  ```
*   **Mức độ**: Nghiêm trọng
*   **Hành động Containment**: Khóa tài khoản AD của quản trị viên sao lưu; ngắt kết nối mạng hệ thống lưu trữ sao lưu thứ cấp.

### Quy tắc 15: Thiết bị lạ kết nối vào mạng chi nhánh (Rogue Device)
*   **Mô tả**: Phát hiện thiết bị không có trong danh mục quản lý cắm cáp vật lý vào mạng nội bộ chi nhánh.
*   **Nguồn Log**: Nhật ký xác thực mạng Cisco ISE (NAC).
*   **Mã truy vấn SPL**:
  ```spl
  index=nac sourcetype=cisco_ise "status=rejected" AND "reason=unauthorized_mac"
  | stats count by switch_port, branch_id
  ```
*   **Mức độ**: Cao
*   **Hành động Containment**: Tự động disable cổng mạng vật lý (port switch) tương ứng; gửi email cảnh báo về cho Kiểm soát viên chi nhánh.

### Quy tắc 16: Thực thi tập lệnh PowerShell mã hóa (Encoded Command)
*   **Mô tả**: Phát hiện tin tặc chạy lệnh PowerShell mã hóa Base64 để lách các bộ lọc kiểm tra.
*   **Nguồn Log**: Windows PowerShell Event logs (Mã 4104 - Ghi lại script block).
*   **Mã truy vấn SPL**:
  ```spl
  index=security (EventCode=4688 OR EventCode=4104) CommandLine="* -enc*" OR CommandLine="* -EncodedCommand*"
  ```
*   **Mức độ**: Cao
*   **Hành động Containment**: Gửi lệnh EDR tạm ngưng tiến trình PowerShell; đẩy ticket cảnh báo về đội săn tìm đe dọa.

### Quy tắc 17: Nhân viên tải tệp tin lên dịch vụ đám mây cá nhân trái phép
*   **Mô tả**: Phát hiện nguy cơ thất thoát dữ liệu (DLP) lên Google Drive, Dropbox cá nhân.
*   **Nguồn Log**: Log máy chủ proxy mạng nội bộ.
*   **Mã truy vấn SPL**:
  ```spl
  index=proxy dest_domain IN ("*drive.google.com*", "*dropbox.com*", "*onedrive.live.com*") Action="upload"
  ```
*   **Mức độ**: Trung bình
*   **Hành động Containment**: Chặn tiến trình tải lên; ghi nhận lịch sử vi phạm chính sách gửi về Khối Nhân sự.

### Quy tắc 18: Sử dụng thẻ ATM tại hai vị trí cách xa nhau trong thời gian ngắn
*   **Mô tả**: Phát hiện hành vi sao chép trộm thẻ (Card cloning) hoặc gian lận thanh toán.
*   **Nguồn Log**: Nhật ký giao dịch cổng Napas/ATM.
*   **Mã truy vấn SPL**:
  ```spl
  index=atm_transactions sourcetype=napas_logs
  | transaction card_number
  | eval time_diff = duration
  | where time_diff < 600 AND distance > 50
  ```
*   **Mức độ**: Cao
*   **Hành động Containment**: Tự động khóa thẻ ATM của khách hàng; gửi tin nhắn SMS khẩn cấp yêu cầu khách hàng xác thực giao dịch.

### Quy tắc 19: Kết nối đến địa chỉ IP Botnet (C2 IP Address)
*   **Mô tả**: Phát hiện thiết bị nội bộ của ngân hàng đã bị lây nhiễm phần mềm độc hại và đang kết nối về máy chủ điều khiển của tin tặc.
*   **Nguồn Log**: Log tường lửa mạng chính (Core Firewall Traffic logs).
*   **Mã truy vấn SPL**:
  ```spl
  index=firewall dest_ip IN [| inputlookup threat_intelligence_ips.csv | fields ip]
  ```
*   **Mức độ**: Nghiêm trọng
*   **Hành động Containment**: Chặn kết nối IP tại tường lửa biên; đẩy lệnh EDR cách ly máy tính bị nhiễm để điều tra.

### Quy tắc 20: Kích hoạt phiên đăng nhập trên tài khoản đã ngưng hoạt động (>90 ngày)
*   **Mô tả**: Phát hiện tài khoản cũ của nhân sự đã nghỉ việc bị tin tặc dò quét mật khẩu thành công.
*   **Nguồn Log**: Windows Security Event Log (Mã 4624 - Đăng nhập thành công).
*   **Mã truy vấn SPL**:
  ```spl
  index=security EventCode=4624
  | lookup active_directory_users_status.csv UserName OUTPUT InactiveDays
  | where InactiveDays > 90
  ```
*   **Mức độ**: Cao
*   **Hành động Containment**: Vô hiệu hóa vĩnh viễn tài khoản Active Directory; thu hồi toàn bộ token đăng nhập.

---

## 4. Các Chỉ số Vận hành An ninh mạng

DieuBank đo lường hiệu quả vận hành SOC và mức độ an toàn thông tin bằng các bộ chỉ số định lượng:

### 10 Chỉ số Hiệu năng chính (Security KPIs)
1.  **Thời gian Phát hiện Trung bình (MTTD)**: Thời gian từ khi sự cố xảy ra đến khi chuyên viên SOC ghi nhận và mở ticket (Mục tiêu: < 10 phút với cảnh báo Nghiêm trọng).
2.  **Thời gian Phản ứng Trung bình (MTTR)**: Thời gian từ khi phát hiện đến khi thực hiện thành công biện pháp cách ly/containment (Mục tiêu: < 30 phút với cảnh báo Nghiêm trọng).
3.  **Tỷ lệ Click Link lừa đảo**: Tỷ lệ nhân viên click vào link giả lập trong các đợt diễn tập phishing nội bộ (Mục tiêu: < 3% toàn ngân hàng).
4.  **Tỷ lệ Tuân thủ Thời gian Vá lỗi**: Phần trăm các lỗ hổng an ninh mức Critical được cập nhật bản vá đúng thời hạn 14 ngày (Mục tiêu: > 98%).
5.  **Phạm vi Giám sát của SIEM**: Tỷ lệ các máy chủ và thiết bị mạng trong danh mục gửi log đầy đủ về SIEM (Mục tiêu: 100%).
6.  **Tỷ lệ Áp dụng MFA**: Tỷ lệ nhân sự đăng nhập hệ thống nội bộ được xác thực qua xác thực đa yếu tố (Mục tiêu: 100%).
7.  **Tỷ lệ Cảnh báo Giả (False Positive Ratio)**: Phần trăm cảnh báo giả trên tổng số lượng cảnh báo do SIEM phát ra (Mục tiêu: < 15%).
8.  **Tỷ lệ Sự cố Tái diễn**: Tỷ lệ sự cố lặp lại cùng một nguyên nhân gốc rễ do chưa hoàn thành khắc phục (Mục tiêu: 0%).
9.  **Tỷ lệ Diễn tập DR Thành công**: Phần trăm các đợt thử nghiệm khôi phục thảm họa đạt mục tiêu RTO/RPO đặt ra (Mục tiêu: 100%).
10. **Tỷ lệ Hoàn thành Đào tạo An ninh**: Phần trăm cán bộ nhân viên hoàn thành khóa đào tạo nhận thức an toàn thông tin hàng năm (Mục tiêu: > 99%).

### 10 Chỉ số Rủi ro chính (Security KRIs)
1.  **Lỗ hổng Bảo mật Quá hạn vá lỗi**: Số lượng lỗ hổng mức điểm CVSS > 9.0 chưa được vá quá thời hạn SLA (Ngưỡng cảnh báo: > 5 trường hợp).
2.  **Tài khoản AD quá hạn ngưng hoạt động**: Số lượng tài khoản không phát sinh đăng nhập > 90 ngày nhưng vẫn hiển thị trạng thái active (Ngưỡng cảnh báo: > 10 tài khoản).
3.  **Số lần truyền tải PII không mã hóa**: Số lượng sự kiện phát hiện truyền nhận dữ liệu định danh khách hàng qua giao thức rõ như HTTP, FTP (Ngưỡng cảnh báo: > 0 sự kiện).
4.  **Số phiên đăng nhập Admin bỏ qua PAM**: Số lượng đăng nhập tài khoản root/admin trực tiếp vào máy chủ mà không thông qua CyberArk (Ngưỡng cảnh báo: > 0 sự kiện).
5.  **Thiết bị mất EDR Agent**: Số lượng máy trạm hoặc máy chủ đang hoạt động nhưng không có kết nối của CrowdStrike EDR client (Ngưỡng cảnh báo: > 2 thiết bị).
6.  **Sự kiện exfiltrate dung lượng lớn**: Số lần phát hiện máy trạm tải lượng dữ liệu ra internet vượt quá 100MB trong vòng 1 giờ (Ngưỡng cảnh báo: > 1 sự kiện).
7.  **Đăng nhập thành công từ IP nước ngoài**: Số lượng đăng nhập tài khoản nhân sự từ các dải IP nước ngoài không nằm trong danh sách whitelist (Ngưỡng cảnh báo: > 0 sự kiện).
8.  **Thay đổi hệ thống thất bại**: Số lượng thay đổi hệ thống gây ra sự cố downtime hoặc phải rollback khẩn cấp (Ngưỡng cảnh báo: > 3 sự kiện/tháng).
9.  **Trễ nại thông báo sự cố lên NHNN/Bộ Công an**: Số lần báo cáo sự cố an ninh quá thời hạn 24 giờ kể từ khi phát hiện (Ngưỡng cảnh báo: > 0 sự kiện).
10. **Nhà cung cấp chưa đánh giá rủi ro**: Số lượng nhà thầu bên thứ ba tiếp cận hệ thống Giới hạn của ngân hàng nhưng chưa thực hiện đánh giá an toàn thông tin định kỳ (Ngưỡng cảnh báo: > 3 nhà thầu).
