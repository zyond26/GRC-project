// app.js - DieuBank (DB) GRC Interactive Dashboard Logic (Vietnamese Version)

// ==========================================
// 1. DATASETS (BỘ DỮ LIỆU)
// ==========================================

const CONTROLS_DATA = [
    // Miền 1: Chính sách & Quản trị
    { id: 1, domain: "Chính sách An ninh & Quản trị", control: "A.5.1 Chính sách ATTT", guidance: "Định nghĩa và xem xét chính sách định kỳ hàng năm.", risk: "Chính sách không phê duyệt dẫn đến áp dụng kiểm soát không nhất quán.", circular09: "Điều 10 (Chính sách ATTT)", decree13: "Điều 26 (Chính sách bảo vệ dữ liệu)", cybersec: "N/A", evidence: "Chính sách ISP cấp độ 1 đã ký, biên bản họp xem xét hàng năm", owner: "CISO" },
    { id: 2, domain: "Chính sách An ninh & Quản trị", control: "A.5.2 Vai trò & Trách nhiệm", guidance: "Xác định và phân bổ các vai trò, trách nhiệm an ninh.", risk: "Sự mơ hồ trong sở hữu dẫn đến lỗ hổng không được vá.", circular09: "Điều 11 (Tổ chức ATTT)", decree13: "Điều 28 (Bổ nhiệm DPO chuyên trách)", cybersec: "Điều 27 (Nhân sự điều phối an ninh mạng)", evidence: "Sơ đồ tổ chức an ninh thông tin, mô tả công việc của CISO/DPO", owner: "CRO" },
    { id: 3, domain: "Chính sách An ninh & Quản trị", control: "A.5.3 Phân tách Nhiệm vụ", guidance: "Phân tách các công việc có thể gây xung đột (dev và prod).", risk: "Lập trình viên sửa mã nguồn sản xuất để trục lợi/gian lận.", circular09: "Điều 11 (Phân tách IT và An ninh)", decree13: "N/A", cybersec: "N/A", evidence: "Cấu hình nhóm phân quyền AD, log thay đổi hệ thống", owner: "CIO" },
    { id: 4, domain: "Chính sách An ninh & Quản trị", control: "A.5.4 Liên hệ Cơ quan chức năng", guidance: "Thiết lập kênh liên lạc với cơ quan chính phủ và địa phương.", risk: "Báo cáo sự cố rò rỉ chậm trễ dẫn đến xử phạt hành chính lớn.", circular09: "Điều 24 (Báo cáo sự cố lên NHNN)", decree13: "Điều 28 (Báo cáo sự cố dữ liệu về Bộ Công an)", cybersec: "Điều 9 (Báo cáo sự cố mạng)", evidence: "Quy trình báo cáo sự cố (SOP), danh sách liên hệ NHNN, Bộ Công an (A05)", owner: "Trưởng ban Pháp chế" },

    // Miền 2: An ninh Nhân sự
    { id: 5, domain: "An ninh Nhân sự & Nhận thức", control: "A.6.1 Thẩm định Nhân sự", guidance: "Thực hiện kiểm tra lý lịch nhân viên và nhà thầu.", risk: "Nhân viên mới có lịch sử đánh cắp dữ liệu phá hoại hệ thống.", circular09: "Điều 13 (Thẩm định lý lịch tuyển dụng)", decree13: "N/A", cybersec: "N/A", evidence: "Hồ sơ kiểm tra lý lịch, bản cam kết NDA mẫu", owner: "Trưởng khối HR" },
    { id: 6, domain: "An ninh Nhân sự & Nhận thức", control: "A.6.3 Đào tạo Nhận thức", guidance: "Cung cấp đào tạo an ninh thông tin định kỳ cho nhân viên.", risk: "Nhân viên click link lừa đảo, dẫn đến nhiễm ransomware.", circular09: "Điều 13 (Đào tạo nhận thức hàng năm)", decree13: "Điều 26 (Nhận thức riêng tư dữ liệu cán bộ)", cybersec: "N/A", evidence: "Danh sách hoàn thành đào tạo, báo cáo phishing thử nghiệm", owner: "CISO" },
    { id: 7, domain: "An ninh Nhân sự & Nhận thức", control: "A.6.4 Quy trình Kỷ luật", guidance: "Thiết lập quy trình kỷ luật chính thức khi vi phạm chính sách.", risk: "Nhân viên bỏ qua các kiểm soát an ninh vì không có chế tài.", circular09: "Điều 13 (Chính sách chế tài)", decree13: "N/A", cybersec: "N/A", evidence: "Chính sách kỷ luật nhân sự, biên bản vi phạm đã ký", owner: "Trưởng khối HR" },
    { id: 8, domain: "An ninh Nhân sự & Nhận thức", control: "A.6.5 Quản lý Rời mạng", guidance: "Xác định quy trình thu hồi tài sản và vô hiệu hóa tài khoản.", risk: "Quản trị viên nghỉ việc vẫn giữ tài khoản VPN hoạt động.", circular09: "Điều 13 (Quy trình bàn giao thôi việc)", decree13: "N/A", cybersec: "N/A", evidence: "Checklist thôi việc đã ký, log khóa tài khoản AD", owner: "Trưởng khối HR" },
    { id: 9, domain: "An ninh Nhân sự & Nhận thức", control: "A.6.6 Thỏa thuận Bảo mật", guidance: "Yêu cầu ký cam kết NDA đối với nhân viên và đối tác.", risk: "Nhà cung cấp rò rỉ sơ đồ kiến trúc mạng nội bộ ngân hàng.", circular09: "Điều 30 (Thỏa thuận an ninh đối tác)", decree13: "Điều 26 (Thỏa thuận bảo mật xử lý dữ liệu)", cybersec: "N/A", evidence: "Hợp đồng lao động kèm NDA, thỏa thuận bảo mật đối tác", owner: "Trưởng ban Pháp chế" },
    { id: 10, domain: "An ninh Nhân sự & Nhận thức", control: "A.6.7 Làm việc Từ xa", guidance: "Bảo mật các kết nối làm việc từ xa và thiết bị đầu cuối.", risk: "Tin tặc chặn kết nối làm việc qua mạng Wi-Fi công cộng.", circular09: "Điều 16 (An toàn kết nối từ xa)", decree13: "N/A", cybersec: "N/A", evidence: "Cấu hình VPN mã hóa, chính sách quản lý thiết bị MDM", owner: "Trưởng nhóm Hệ thống" },

    // Miền 3: Quản lý Tài sản
    { id: 11, domain: "Quản lý & Phân loại Tài sản", control: "A.5.9 Danh mục Tài sản", guidance: "Duy trì danh mục tài sản thông tin và tài sản vật lý.", risk: "Các hệ thống 'Shadow IT' không được vá lỗ hổng bảo mật.", circular09: "Điều 14 (Danh mục tài sản CNTT)", decree13: "N/A", cybersec: "N/A", evidence: "Sổ đăng ký tài sản (Asset Register), screenshot hệ thống CMDB", owner: "Trưởng nhóm Hệ thống" },
    { id: 12, domain: "Quản lý & Phân loại Tài sản", control: "A.5.10 Sử dụng Hợp lệ", guidance: "Định nghĩa quy tắc sử dụng tài nguyên CNTT của ngân hàng.", risk: "Nhân viên tải mã độc qua hòm thư cá nhân trên máy trạm.", circular09: "Điều 13 (Chính sách sử dụng tài sản)", decree13: "N/A", cybersec: "N/A", evidence: "Bản cam kết sử dụng tài nguyên đã ký (AUP)", owner: "CISO" },
    { id: 13, domain: "Quản lý & Phân loại Tài sản", control: "A.5.12 Phân loại Thông tin", guidance: "Phân loại dữ liệu dựa trên mức độ nhạy cảm và tác động.", risk: "Dữ liệu PII của khách hàng lưu giữ trên thư mục chia sẻ công cộng.", circular09: "Điều 14 (Phân loại cấp độ hệ thống)", decree13: "Điều 3 (Phân loại dữ liệu cơ bản/nhạy cảm)", cybersec: "N/A", evidence: "Tiêu chuẩn Phân loại Dữ liệu ngân hàng", owner: "DPO / Quản lý Rủi ro" },
    { id: 14, domain: "Quản lý & Phân loại Tài sản", control: "A.5.13 Dán nhãn Thông tin", guidance: "Áp dụng nhãn dán siêu dữ liệu (metadata) cho các tệp mật.", risk: "Tài liệu giới hạn bị in ra và để quên tại khu vực công cộng.", circular09: "Điều 14 (Dán nhãn tài sản)", decree13: "Điều 26 (Dán nhãn bảo vệ dữ liệu)", cybersec: "N/A", evidence: "Chính sách phân loại Microsoft Purview", owner: "CISO" },
    { id: 15, domain: "Quản lý & Phân loại Tài sản", control: "A.5.11 Sở hữu Tài sản", guidance: "Chỉ định chủ sở hữu cho tất cả các tài sản thông tin.", risk: "Máy chủ không có người quản lý bị bỏ quên không vá lỗi 12 tháng.", circular09: "Điều 14 (Trách nhiệm quản lý tài sản)", decree13: "N/A", cybersec: "N/A", evidence: "Trường Owner trong CMDB / Asset Register", owner: "Quản lý Rủi ro CNTT" },
    { id: 16, domain: "Quản lý & Phân loại Tài sản", control: "A.5.14 Truyền tải Thông tin", guidance: "Bảo mật truyền dữ liệu qua kênh mã hóa (SFTP/TLS).", risk: "Bản sao lưu cơ sở dữ liệu khách hàng bị đánh cắp trên đường truyền.", circular09: "Điều 18 (An toàn truyền dữ liệu)", decree13: "Điều 38 (Hồ sơ DPIA chuyển dữ liệu ra nước ngoài)", cybersec: "Điều 26 (Yêu cầu lưu trữ dữ liệu tại Việt Nam)", evidence: "Cấu hình cổng SFTP, hợp đồng truyền nhận bảo mật", owner: "CISO / DPO" },

    // Miền 4: Kiểm soát Truy cập
    { id: 17, domain: "Kiểm soát Truy cập & Định danh", control: "A.5.15 Chính sách Truy cập", guidance: "Thực thi quyền hạn tối thiểu và cần biết mới biết.", risk: "Giao dịch viên xem hồ sơ tín dụng của khách hàng VIP không lý do.", circular09: "Điều 16 (Kiểm soát truy cập)", decree13: "Điều 26 (Giới hạn truy cập dữ liệu cá nhân)", cybersec: "N/A", evidence: "Chính sách Kiểm soát Truy cập", owner: "CISO" },
    { id: 18, domain: "Kiểm soát Truy cập & Định danh", control: "A.5.16 Quản lý Định danh", guidance: "Đảm bảo định danh duy nhất cho người dùng và hệ thống.", risk: "Sử dụng tài khoản dùng chung khiến không thể truy vết lỗi.", circular09: "Điều 16 (Tài khoản định danh duy nhất)", decree13: "N/A", cybersec: "N/A", evidence: "Log kết xuất AD chứng minh không có tài khoản dùng chung", owner: "Trưởng nhóm Hệ thống" },
    { id: 19, domain: "Kiểm soát Truy cập & Định danh", control: "A.5.18 Truy cập Đặc quyền", guidance: "Giới hạn và giám sát tài khoản quản trị viên (PAM).", risk: "Quản trị viên lạm dụng quyền truy vấn trực tiếp DB khách hàng.", circular09: "Điều 16 (Tài khoản quản trị đặc quyền)", decree13: "Điều 26 (Log truy vấn dữ liệu nhạy cảm)", cybersec: "N/A", evidence: "Log kiểm toán CyberArk, video lưu trữ phiên làm việc", owner: "CISO" },
    { id: 20, domain: "Kiểm soát Truy cập & Định danh", control: "A.5.17 Soát xét Quyền", guidance: "Thực hiện soát xét định kỳ hàng quý quyền truy cập người dùng.", risk: "Nhân viên chuyển phòng ban vẫn giữ quyền truy cập cũ.", circular09: "Điều 16 (Soát xét định kỳ quyền hạn)", decree13: "N/A", cybersec: "N/A", evidence: "Biên bản báo cáo Soát xét Quyền hạn Q1/Q2", owner: "Quản lý Rủi ro CNTT" },
    { id: 21, domain: "Kiểm soát Truy cập & Định danh", control: "A.8.2 Độ mạnh Mật khẩu", guidance: "Yêu cầu độ mạnh mật khẩu và chặn việc sử dụng lại.", risk: "Tin tặc brute-force thành công mật khẩu admin yếu.", circular09: "Điều 16 (Độ phức tạp mật khẩu)", decree13: "N/A", cybersec: "N/A", evidence: "Cấu hình Group Policy Active Directory", owner: "Trưởng nhóm Hệ thống" },
    { id: 22, domain: "Kiểm soát Truy cập & Định danh", control: "A.8.5 Xác thực Đa yếu tố", guidance: "Enforce MFA for remote and privileged access.", risk: "Lộ mật khẩu đăng nhập từ xa làm hacker truy cập hệ thống.", circular09: "Điều 16 (MFA cho truy cập bên ngoài)", decree13: "Điều 26 (MFA cho hệ thống lưu trữ PII)", cybersec: "N/A", evidence: "Ảnh chụp chính sách Microsoft Entra ID MFA", owner: "Trưởng nhóm Hệ thống" },
    { id: 23, domain: "Kiểm soát Truy cập & Định danh", control: "A.8.2 Thời gian Chờ", guidance: "Triển khai tự động khóa màn hình và hết hạn phiên làm việc.", risk: "Giao dịch viên rời quầy, khách hàng tự ý quẹt thẻ giao dịch.", circular09: "Điều 16 (Tiêu chuẩn khóa màn hình tự động)", decree13: "N/A", cybersec: "N/A", evidence: "Cấu hình thời gian lockout trong GPO", owner: "Trưởng nhóm Hệ thống" },
    { id: 24, domain: "Kiểm soát Truy cập & Định danh", control: "A.8.4 Truy cập Mã nguồn", guidance: "Hạn chế lập trình viên truy cập vào các kho mã nguồn sản xuất.", risk: "Lập trình viên tự ý sửa mã nguồn để bypass kiểm soát gian lận.", circular09: "Điều 16 (Giới hạn tiếp cận mã nguồn)", decree13: "N/A", cybersec: "N/A", evidence: "Phân quyền thành viên trên GitLab, ssh keys list", owner: "Trưởng bộ phận Dev" },

    // Miền 5: Mã hóa
    { id: 25, domain: "Cryptography & Key Management", control: "A.8.24 Chính sách Mã hóa", guidance: "Xác định thuật toán và độ dài khóa (AES-256, TLS 1.3).", risk: "Thuật toán cũ bị bẻ khóa, làm lộ lọt dữ liệu giao dịch.", circular09: "Điều 18 (Tiêu chuẩn thuật toán mã hóa)", decree13: "Điều 26 (Mã hóa dữ liệu PII lưu trữ)", cybersec: "N/A", evidence: "Chính sách Mã hóa mật mã, log cấu hình cipher suite", owner: "CISO" },
    { id: 26, domain: "Cryptography & Key Management", control: "A.5.14 Quản lý Khóa", guidance: "Lưu trữ khóa mật mã an toàn trong HSM/KMS.", risk: "Khóa mã hóa cứng trong file cấu hình ứng dụng bị rò rỉ.", circular09: "Điều 18 (Quy định quản lý khóa qua HSM)", decree13: "Điều 26 (Bảo vệ an toàn khóa mật mã)", cybersec: "N/A", evidence: "Lịch trình thay khóa mật mã, log kiểm toán Luna HSM", owner: "Trưởng nhóm Hệ thống" },
    { id: 27, domain: "Cryptography & Key Management", control: "A.8.12 Truyền thông An toàn", guidance: "Mã hóa dữ liệu truyền tải trên mạng công cộng.", risk: "Mật khẩu dạng text trần bị nghe lén gói tin trên mạng.", circular09: "Điều 18 (Yêu cầu mã hóa đường truyền)", decree13: "Điều 26 (Mã hóa dữ liệu truyền tải)", cybersec: "N/A", evidence: "Kết quả đánh giá SSL Labs, cấu hình mã hóa mạng", owner: "Trưởng nhóm Mạng" },

    // Miền 6: An toàn Vật lý
    { id: 28, domain: "Physical & Environmental Security", control: "A.7.1 Ranh giới Vật lý", guidance: "Xác định ranh giới vật lý an toàn cho hệ thống CNTT.", risk: "Kẻ gian xâm nhập vào phòng máy chủ chính mà không bị chặn.", circular09: "Điều 20 (Ranh giới an toàn DC)", decree13: "N/A", cybersec: "Điều 27 (An toàn nút thông tin quan trọng)", evidence: "Bản vẽ mặt bằng Data Center, log quẹt thẻ cửa ra vào", owner: "Trưởng ban Thiết bị" },
    { id: 29, domain: "Physical & Environmental Security", control: "A.7.2 Kiểm soát Ra vào", guidance: "Giới hạn quyền ra vào bằng thẻ từ/sinh trắc học.", risk: "Cựu nhân viên sử dụng thẻ chưa bị thu hồi đột nhập Data Center.", circular09: "Điều 20 (Truy cập bằng sinh trắc học/vân tay)", decree13: "N/A", cybersec: "Điều 27 (Giới hạn tiếp cận vật lý)", evidence: "Nhật ký lưu trữ quẹt thẻ cửa từ, sổ đăng ký khách", owner: "Trưởng ban Thiết bị" },
    { id: 30, domain: "Physical & Environmental Security", control: "A.7.3 Vị trí Thiết bị", guidance: "Bố trí thiết bị để giảm thiểu rủi ro từ môi trường.", risk: "Đường ống nước bị rò rỉ ngay phía trên tủ rack máy chủ lõi.", circular09: "Điều 20 (Bố trí phòng máy chủ)", decree13: "N/A", cybersec: "N/A", evidence: "Báo cáo khảo sát an toàn phòng máy chủ DC", owner: "Trưởng nhóm Hệ thống" },
    { id: 31, domain: "Physical & Environmental Security", control: "A.7.4 Hạ tầng Tiện ích", guidance: "Bảo vệ hệ thống khỏi sự cố mất điện (UPS/Generator).", risk: "Mất điện lưới đột ngột gây hư hỏng đĩa cứng và mất dữ liệu.", circular09: "Điều 20 (Điện dự phòng và máy phát)", decree13: "N/A", cybersec: "N/A", evidence: "Nhật ký kiểm thử UPS, log chạy máy phát điện", owner: "Trưởng ban Thiết bị" },
    { id: 32, domain: "Physical & Environmental Security", control: "A.7.5 An toàn Cáp dẫn", guidance: "Bảo vệ cáp nguồn và cáp viễn thông khỏi hư hại.", risk: "Cáp quang chính kết nối ngân hàng bị máy công trình cắt đứt.", circular09: "Điều 20 (Ống bảo vệ cáp vật lý)", decree13: "N/A", cybersec: "N/A", evidence: "Ảnh bọc cáp thép, sơ đồ đường cáp dự phòng", owner: "Trưởng nhóm Mạng" },
    { id: 33, domain: "Physical & Environmental Security", control: "A.7.6 Phương tiện Lưu trữ", guidance: "Lưu trữ băng từ sao lưu trong két chống cháy chuyên dụng.", risk: "Băng từ sao lưu chứa PII bị đánh cắp khỏi tủ làm việc.", circular09: "Điều 14 (An toàn tủ lưu trữ băng từ)", decree13: "Điều 26 (An toàn băng từ sao lưu)", cybersec: "N/A", evidence: "Danh mục lưu trữ két offsite, nhật ký ký nhận bàn giao", owner: "Trưởng nhóm Hệ thống" },
    { id: 34, domain: "Physical & Environmental Security", control: "A.7.10 Tiêu hủy An toàn", guidance: "Hủy hoặc ghi đè phương tiện lưu trữ trước khi thanh lý.", risk: "Ổ cứng thanh lý chứa dữ liệu giao dịch khách hàng dạng rõ.", circular09: "Điều 14 (Quy trình tiêu hủy đĩa cứng hỏng)", decree13: "Điều 16 (Xóa bỏ dữ liệu cá nhân hoàn toàn)", cybersec: "N/A", evidence: "Biên bản tiêu hủy thiết bị kèm chữ ký CISO và bên thứ 3", owner: "Trưởng nhóm Hệ thống" },

    // Miền 7: An toàn Vận hành
    { id: 35, domain: "Operations & Network Security", control: "A.8.1 Quản lý Thay đổi", guidance: "Xem xét, phê duyệt và thử nghiệm mọi thay đổi hệ thống.", risk: "Bản vá chưa thử nghiệm làm treo hệ thống cơ sở dữ liệu Core.", circular09: "Điều 19 (Quy trình quản lý thay đổi)", decree13: "N/A", cybersec: "N/A", evidence: "Quyết định phê duyệt của CAB, tickets Jira thay đổi", owner: "CIO" },
    { id: 36, domain: "Operations & Network Security", control: "A.8.7 Sao lưu Dữ liệu", guidance: "Duy trì các bản sao lưu an toàn, mã hóa và cách ly (offline).", risk: "Mã độc tống tiền mã hóa toàn bộ dữ liệu sao lưu trực tuyến.", circular09: "Điều 19 (Kiểm tra khôi phục sao lưu)", decree13: "Điều 26 (Khôi phục dữ liệu PII khi gặp sự cố)", cybersec: "N/A", evidence: "Báo cáo chạy sao lưu tự động thành công, biên bản diễn tập DR", owner: "Trưởng nhóm Hệ thống" },
    { id: 37, domain: "Operations & Network Security", control: "A.8.8 Quản lý Lỗ hổng", guidance: "Deploy antivirus/EDR on all endpoints and servers.", risk: "Mã độc lây lan nhanh chóng qua mạng LAN giữa các chi nhánh.", circular09: "Điều 19 (Chính sách phòng chống virus/mã độc)", decree13: "N/A", cybersec: "N/A", evidence: "Bảng điều khiển quản trị CrowdStrike EDR active", owner: "CISO / Quản lý SOC" },
    { id: 38, domain: "Operations & Network Security", control: "A.8.9 Quản lý Cấu hình", guidance: "Conduct regular vulnerability scans and patch critical assets.", risk: "Kẻ tấn công khai thác lỗ hổng đã công bố trên cổng web dịch vụ.", circular09: "Điều 19 (Remediation quét lỗ hổng)", decree13: "N/A", cybersec: "Điều 27 (Đánh giá quét an ninh hệ thống)", evidence: "Log quét lỗ hổng từ Tenable, lịch trình cài bản vá", owner: "CISO" },
    { id: 39, domain: "Operations & Network Security", control: "A.8.19 Quản lý Nhật ký", guidance: "Record security events and generate audit logs.", risk: "Thiếu log hệ thống dẫn đến không thể điều tra nguồn gốc rò rỉ dữ liệu.", circular09: "Điều 22 (Lưu nhật ký vận hành)", decree13: "Điều 26 (Nhật ký xử lý thông tin cá nhân)", cybersec: "N/A", evidence: "Log ingestion SIEM, cấu hình thời gian lưu trữ", owner: "SOC Manager" },
    { id: 40, domain: "Operations & Network Security", control: "A.8.20 Giám sát An ninh", guidance: "Monitor systems for anomalous behavior in real-time.", risk: "Kẻ tấn công thực hiện truy vấn trích xuất dữ liệu mà không bị phát hiện.", circular09: "Điều 22 (Giám sát của SOC tập trung)", decree13: "N/A", cybersec: "Điều 27 (Giám sát hệ thống thông tin)", evidence: "Màn hình trực quan Splunk SIEM, danh sách tickets sự cố", owner: "SOC Manager" },
    { id: 41, domain: "Operations & Network Security", control: "A.8.21 An toàn Mạng", guidance: "Segment network zones (DMZ, Internal, Database, SWIFT).", risk: "Máy chủ Web ở vùng DMZ bị hack có thể kết nối thẳng đến Database lõi.", circular09: "Điều 21 (Phân vùng mạng an toàn)", decree13: "N/A", cybersec: "Điều 27 (Bảo vệ nút mạng lõi)", evidence: "Cấu hình rules firewall mạng, sơ đồ phân vùng logic", owner: "Trưởng nhóm Mạng" },
    { id: 42, domain: "Operations & Network Security", control: "A.8.22 Phân vùng Mạng", guidance: "Secure web portals using WAF and secure coding practices.", risk: "Lỗi SQL Injection trên ứng dụng web làm rò rỉ bảng mật khẩu.", circular09: "Điều 19 (Quy định lập trình ứng dụng an toàn)", decree13: "N/A", cybersec: "N/A", evidence: "Log sự kiện chặn của WAF, kết quả quét SAST/DAST", owner: "Trưởng bộ phận Dev" },

    // Miền 8: Quản lý Sự cố
    { id: 43, domain: "Incident Response & SOC", control: "A.5.24 Sự cố An toàn TT", guidance: "Định nghĩa trách nhiệm và quy trình ứng phó sự cố an ninh.", risk: "Cuộc tấn công mạng diễn ra mà không có đội ngũ xử lý chuyên nghiệp.", circular09: "Điều 24 (Xây dựng kế hoạch ứng phó sự cố)", decree13: "Điều 26 (Biện pháp phản ứng rò rỉ dữ liệu)", cybersec: "Điều 9 (Báo cáo sự cố an ninh mạng)", evidence: "Kế hoạch ứng phó sự cố (IRP), nhật ký diễn tập", owner: "CISO" },
    { id: 44, domain: "Incident Response & SOC", control: "A.6.8 Báo cáo Sự kiện", guidance: "Provide channel for staff to report suspected security events.", risk: "Nhân viên phát hiện email lừa đảo nhưng không báo cáo, tự ý click.", circular09: "Điều 13 (Quy trình nhân viên báo sự cố)", decree13: "N/A", cybersec: "N/A", evidence: "Nút report email phishing trên Outlook, log IT helpdesk", owner: "CISO" },
    { id: 45, domain: "Incident Response & SOC", control: "A.5.25 Đánh giá & Quyết định", guidance: "Evaluate security events to determine if they are incidents.", risk: "Cảnh báo giả làm nghẽn vận hành, trong khi sự cố thật bị bỏ qua.", circular09: "Điều 24 (Xếp lớp phân loại sự cố)", decree13: "N/A", cybersec: "N/A", evidence: "Tài liệu hướng dẫn phân loại sự cố, nhật ký xử lý", owner: "CISO" },
    { id: 46, domain: "Incident Response & SOC", control: "A.5.28 Rút bài học Sự cố", guidance: "Conduct post-incident reviews to identify root causes.", risk: "Lỗ hổng cũ tiếp tục bị khai thác lại do thiếu đánh giá sau sự cố.", circular09: "Điều 24 (Báo cáo nguyên nhân gốc rễ)", decree13: "N/A", cybersec: "N/A", evidence: "Biên bản họp Post-Incident Review (PIR) sự cố lớn", owner: "CISO" },
    { id: 47, domain: "Incident Response & SOC", control: "A.8.16 Thu thập Chứng cứ", guidance: "Maintain chain of custody for digital evidence.", risk: "File log bị xóa/sửa đổi khiến không thể phục vụ việc truy tố.", circular09: "Điều 24 (Thu thập phân tích vết kỹ thuật)", decree13: "N/A", cybersec: "N/A", evidence: "Checklist niêm phong chứng cứ số, mã băm sha256 tệp tin log", owner: "CISO" },

    // Miền 9: BCP / DRP
    { id: 48, domain: "Business Continuity & BIA", control: "A.5.29 BCP sẵn sàng", guidance: "Develop and maintain Business Continuity Plans.", risk: "Mất điện diện rộng tại khu vực miền Nam làm ngưng trệ giao dịch.", circular09: "Điều 25 (Phương án đảm bảo liên tục kinh doanh)", decree13: "N/A", cybersec: "N/A", evidence: "Kế hoạch BCP hệ thống lõi ngân hàng, log gọi thử liên lạc", owner: "CIO" },
    { id: 49, domain: "Business Continuity & BIA", control: "A.5.30 Tính sẵn sàng DRP", guidance: "Implement Disaster Recovery sites and procedures.", risk: "Phòng máy chủ chính bị hỏng hoàn toàn nhưng site dự phòng DR không thể khởi động.", circular09: "Điều 25 (Thiết lập phòng máy chủ dự phòng)", decree13: "N/A", cybersec: "N/A", evidence: "Lịch diễn tập DRP, log chuyển mạch thực tế sang site dự phòng", owner: "CIO" },
    { id: 50, domain: "Business Continuity & BIA", control: "A.8.14 Dự phòng Thiết bị", guidance: "Implement redundant hardware, paths, and components.", risk: "Một thiết bị tường lửa hỏng làm mất kết nối toàn bộ hệ thống ngân hàng.", circular09: "Điều 21 (Thiết bị mạng và đường truyền dự phòng)", decree13: "N/A", cybersec: "N/A", evidence: "Cấu hình firewall HA cluster, kiểm tra tuyến định tuyến BGP", owner: "Trưởng nhóm Mạng" }
];

const RISKS_DATA = [
    { id: "RSK-01", asset: "Core Banking (T24)", threat: "Mã độc tống tiền mã hóa toàn bộ dữ liệu T24.", vulnerability: "Hệ điều hành máy chủ Core chưa được vá lỗ hổng.", l_inh: 3, i_inh: 5, inh_score: 15, controls: "Phần mềm diệt virus thông thường, sao lưu băng từ hàng ngày.", l_res: 2, i_res: 5, res_score: 10, owner: "Trưởng nhóm IT Core", treatment: "Triển khai CrowdStrike EDR, thiết lập vùng lưu trữ sao lưu cô lập bất biến (immutable), phân vùng mạng DB lõi." },
    { id: "RSK-02", asset: "Cổng SWIFT", threat: "API bị chiếm quyền điều khiển, chuyển tiền giả.", vulnerability: "Sử dụng API key tĩnh, thiếu xác thực đa yếu tố (MFA).", l_inh: 3, i_inh: 5, inh_score: 15, controls: "Giới hạn địa chỉ IP kết nối (IP whitelisting).", l_res: 2, i_res: 5, res_score: 10, owner: "Trưởng khối Nguồn vốn", treatment: "Triển khai CyberArk PAM, bắt buộc xác thực MFA cho giao dịch viên SWIFT, cấu hình cảnh báo giao dịch bất thường trên SIEM." },
    { id: "RSK-03", asset: "Database Khách hàng", threat: "Rò rỉ dữ liệu PII qua SQL Injection trên web.", vulnerability: "Ứng dụng web Internet Banking thiếu lọc dữ liệu đầu vào.", l_inh: 4, i_inh: 4, inh_score: 16, controls: "Mã hóa đường truyền SSL/TLS, đánh giá kiểm thử xâm nhập (pentest) hàng năm.", l_res: 2, i_res: 4, res_score: 8, owner: "DPO / Khối Số", treatment: "Triển khai Tường lửa Ứng dụng Web (WAF), tích hợp công cụ quét mã nguồn tự động SAST/DAST trong quy trình CI/CD." },
    { id: "RSK-04", asset: "Mạng lưới ATM", threat: "Kẻ gian hack cổng USB vật lý để rút tiền (jackpotting).", vulnerability: "Khe cắm USB trên vỏ máy ATM không được khóa bảo vệ.", l_inh: 4, i_inh: 3, inh_score: 12, controls: "Camera giám sát CCTV tại buồng ATM.", l_res: 2, i_res: 3, res_score: 6, owner: "Trưởng Trung tâm Thẻ", treatment: "Lắp đặt hộp khóa bảo vệ cổng vật lý, mã hóa toàn bộ ổ cứng máy ATM (BitLocker), vô hiệu hóa cổng kết nối USB trên OS." },
    { id: "RSK-05", asset: "Hệ duyệt Tín dụng", threat: "Nhân viên nâng điểm tín dụng nội bộ trái phép.", vulnerability: "Hệ thống thiếu tính năng giám sát hoạt động DB (DAM).", l_inh: 3, i_inh: 4, inh_score: 12, controls: "Phân quyền truy cập tài khoản Active Directory.", l_res: 2, i_res: 4, res_score: 8, owner: "Giám đốc Khối Tín dụng", treatment: "Triển khai Imperva DAM ghi nhận log truy vấn SQL, áp dụng quy trình duyệt kép (four-eyes) đối với các giao dịch ghi đè hạn mức." },
    { id: "RSK-06", asset: "Active Directory", threat: "Tài khoản thường leo thang đặc quyền lên Domain Admin.", vulnerability: "Cấu hình giao thức xác thực NTLMv1 cũ, mật khẩu admin yếu.", l_inh: 4, i_inh: 4, inh_score: 16, controls: "Chính sách lưu lịch sử mật khẩu tối đa 5 lần.", l_res: 2, i_res: 4, res_score: 8, owner: "Giám đốc Công nghệ", treatment: "Vô hiệu hóa NTLMv1, triển khai giải pháp giám sát Microsoft Defender for Identity, nâng độ dài mật khẩu tối thiểu lên 16 ký tự." },
    { id: "RSK-07", asset: "Mobile Banking", threat: "Tấn công DDoS làm tê liệt ứng dụng Mobile App.", vulnerability: "Chưa sử dụng dịch vụ chống DDoS chuyên dụng của ISP.", l_inh: 4, i_inh: 4, inh_score: 16, controls: "Thuê 2 đường truyền Internet dự phòng của các nhà mạng khác nhau.", l_res: 2, i_res: 4, res_score: 8, owner: "Trưởng khối Ngân hàng Số", treatment: "Định tuyến lưu lượng Mobile Banking qua dịch vụ Cloudflare Magic Transit để lọc và làm sạch lưu lượng DDoS." },
    { id: "RSK-08", asset: "Mobile App", threat: "Thư viện SDK bên thứ ba trong app chứa mã độc.", vulnerability: "Quy trình đánh giá bảo mật chuỗi cung ứng phần mềm yếu.", l_inh: 3, i_inh: 4, inh_score: 12, controls: "Lập trình viên xem xét mã nguồn thủ công trước khi release.", l_res: 2, i_res: 4, res_score: 8, owner: "Trưởng nhóm Mobile Dev", treatment: "Tích hợp công cụ tự động quét thành phần phần mềm (Snyk SBOM scanner) vào quy trình phát triển." },
    { id: "RSK-09", asset: "Hệ thống Email", threat: "Tài khoản admin IT bị hack bằng email lừa đảo.", vulnerability: "Không bắt buộc xác thực Token cứng FIDO2 cho tài khoản admin.", l_inh: 4, i_inh: 4, inh_score: 16, controls: "Yêu cầu xác thực tài khoản qua mật khẩu và nhận mã OTP SMS.", l_res: 2, i_res: 4, res_score: 8, owner: "Giám đốc ATTT", treatment: "Cấp phát khóa cứng bảo mật YubiKey cho 100% tài khoản có đặc quyền quản trị hệ thống." },
    { id: "RSK-10", asset: "Thiết bị HSM", threat: "Lộ khóa giải mã cơ sở dữ liệu khách hàng.", vulnerability: "Khóa mã hóa được lưu dạng văn bản rõ trong file config ứng dụng.", l_inh: 2, i_inh: 5, inh_score: 10, controls: "Giới hạn quyền truy cập thư mục cấu hình bằng mật khẩu.", l_res: 1, i_res: 5, res_score: 5, owner: "Giám đốc ATTT", treatment: "Chuyển toàn bộ khóa mã hóa vào thiết bị Luna HSM; ứng dụng truy xuất khóa thông qua API chứng chỉ SSL client." },
    { id: "RSK-11", asset: "Phòng máy chủ", threat: "Kẻ gian đột nhập trực tiếp vào phòng máy chủ chính.", vulnerability: "Cửa phòng máy chủ chỉ sử dụng khóa từ thông thường.", l_inh: 2, i_inh: 4, inh_score: 8, controls: "Bảo vệ trực 24/7 tại sảnh chính tòa nhà.", l_res: 1, i_res: 4, res_score: 4, owner: "Trưởng ban Thiết bị", treatment: "Lắp đặt khóa sinh trắc học vân tay/tĩnh mạch, cảm biến chuyển động hồng ngoại và hệ thống cảnh báo còi hú." },
    { id: "RSK-12", asset: "Máy trạm làm việc", threat: "Tin tặc nghe lén lưu lượng làm việc từ xa của nhân viên.", vulnerability: "Nhân viên kết nối mạng nội bộ qua Wi-Fi gia đình không mã hóa.", l_inh: 4, i_inh: 3, inh_score: 12, controls: "Cài đặt ứng dụng VPN client trên máy tính xách tay.", l_res: 2, i_res: 3, res_score: 6, owner: "Trưởng nhóm Hạ tầng", treatment: "Bắt buộc kết nối qua VPN Always-On, tích hợp kiểm tra an toàn thiết bị (Host Checker) trước khi cho phép đăng nhập AD." },
    { id: "RSK-13", asset: "Dữ liệu Sao lưu", threat: "Bản sao lưu bị lỗi không thể khôi phục khi gặp thảm họa.", vulnerability: "Không thực hiện kiểm tra khôi phục bản sao lưu định kỳ.", l_inh: 3, i_inh: 5, inh_score: 15, controls: "Tự động chạy tiến trình sao lưu hàng đêm theo lịch trình.", l_res: 2, i_res: 5, res_score: 10, owner: "Trưởng nhóm Hạ tầng", treatment: "Cấu hình script kiểm tra tính toàn vẹn của file sao lưu; thực hiện khôi phục giả lập trên môi trường Sandbox hàng tháng." },
    { id: "RSK-14", asset: "Customer DB", threat: "Vi phạm yêu cầu xóa dữ liệu của Nghị định 13.", vulnerability: "Thiếu quy trình kỹ thuật để xóa sạch dữ liệu khách hàng.", l_inh: 4, i_inh: 4, inh_score: 16, controls: "Thu thập phiếu yêu cầu đồng thuận của khách hàng bằng giấy.", l_res: 2, i_res: 4, res_score: 8, owner: "Nhân sự DPO", treatment: "Phát triển công cụ tự động hóa quy trình xóa/ẩn danh dữ liệu khách hàng trên hệ thống Core T24 theo yêu cầu DSR." },
    { id: "RSK-15", asset: "Thiết bị Đầu cuối", threat: "Nhân viên sao chép dữ liệu khách hàng ra USB cá nhân.", vulnerability: "Các cổng USB trên máy trạm làm việc không bị chặn kết nối.", l_inh: 4, i_inh: 3, inh_score: 12, controls: "Ban hành nội quy cấm sử dụng thiết bị lưu trữ ngoài.", l_res: 2, i_res: 3, res_score: 6, owner: "Giám đốc ATTT", treatment: "Triển khai chính sách MDM khóa tính năng đọc/ghi đối với các thiết bị lưu trữ USB ngoại vi trên toàn ngân hàng." },
    { id: "RSK-16", asset: "Internet Banking", threat: "Lỗ hổng zero-day (như Log4j) bị hacker khai thác.", vulnerability: "Quy trình cập nhật bản vá lỗ hổng ứng dụng chậm trễ.", l_inh: 4, i_inh: 5, inh_score: 20, controls: "Thực hiện cập nhật phần mềm định kỳ hàng tháng.", l_res: 2, i_res: 5, res_score: 10, owner: "Trưởng khối Số", treatment: "Tổ chức diễn tập tải giả lập (Load testing); triển khai cơ chế tự động mở rộng (Auto-scaling) trên hạ tầng máy chủ gateway." },
    { id: "RSK-17", asset: "Active Directory", threat: "Nhân viên đã nghỉ việc vẫn đăng nhập được hệ thống.", vulnerability: "Quy trình báo cáo nhân sự thôi việc giữa HR và IT bị chậm trễ.", l_inh: 4, i_inh: 4, inh_score: 16, controls: "Đối soát thủ công danh sách nhân sự thôi việc hàng tháng.", l_res: 2, i_res: 4, res_score: 8, owner: "Trưởng khối HR", treatment: "Liên kết trực tiếp cơ sở dữ liệu nhân sự (Workday) với Active Directory để tự động vô hiệu hóa tài khoản khi trạng thái nghỉ việc." },
    { id: "RSK-18", asset: "SOC SIEM", threat: "Không phát hiện được tấn công tại các chi nhánh tỉnh.", vulnerability: "Thiết bị định tuyến tại các chi nhánh không đẩy log về SIEM.", l_inh: 3, i_inh: 3, inh_score: 9, controls: "Thu thập log từ tường lửa trung tâm (Core Firewall).", l_res: 2, i_res: 3, res_score: 6, owner: "Quản lý SOC", treatment: "Cấu hình giao thức đẩy log Syslog trên toàn bộ router chi nhánh về máy thu thập tập trung của SIEM." },
    { id: "RSK-19", asset: "Data Warehouse", threat: "Thùng lưu trữ cloud chứa dữ liệu báo cáo bị mở công khai.", vulnerability: "Thiếu công cụ giám sát cấu hình bảo mật đám mây.", l_inh: 3, i_inh: 4, inh_score: 12, controls: "Phân quyền truy cập tài khoản cloud bằng mật khẩu.", l_res: 1, i_res: 4, res_score: 4, owner: "Giám đốc Công nghệ", treatment: "Triển khai giải pháp CSPM tự động quét và chặn cấu hình public thùng lưu trữ cloud chứa thông tin báo cáo." },
    { id: "RSK-20", asset: "Network Router", threat: "Sự cố lặp định tuyến làm sập mạng kết nối ATM.", vulnerability: "Không cấu hình giao thức chống lặp vòng định tuyến mạng.", l_inh: 3, i_inh: 3, inh_score: 9, controls: "Triển khai các thiết bị mạng chạy song song dự phòng vật lý.", l_res: 1, i_res: 3, res_score: 3, owner: "Trưởng nhóm Mạng", treatment: "Cấu hình lại các chính sách định tuyến và kích hoạt giao thức Spanning Tree Protocol (STP) trên toàn bộ switch chi nhánh." },
    { id: "RSK-21", asset: "Backup Tapes", threat: "Băng từ lưu trữ bị mất cắp trong quá trình vận chuyển.", vulnerability: "Dữ liệu sao lưu trên băng từ không được mã hóa.", l_inh: 2, i_inh: 4, inh_score: 8, controls: "Vận chuyển băng từ bằng vali có khóa bảo mật chuyên dụng.", l_res: 1, i_res: 4, res_score: 4, owner: "Trưởng nhóm Hạ tầng", treatment: "Kích hoạt tính năng mã hóa phần cứng (LTO-9 hardware encryption) ngay khi tiến trình sao lưu bắt đầu." },
    { id: "RSK-22", asset: "SOC SIEM", threat: "Báo cáo sự cố sai thời gian do lệch múi giờ thiết bị.", vulnerability: "Các máy chủ và thiết bị mạng không đồng bộ thời gian NTP.", l_inh: 3, i_inh: 3, inh_score: 9, controls: "Quản trị viên kiểm tra và cập nhật múi giờ thủ công.", l_res: 1, i_res: 3, res_score: 3, owner: "Quản lý SOC", treatment: "Cấu hình trỏ dịch vụ thời gian của toàn bộ máy chủ và thiết bị mạng về hệ thống NTP Server nội bộ HA của ngân hàng." },
    { id: "RSK-23", asset: "Git Code Base", threat: "Lập trình viên đẩy nhầm API key của T24 lên GitHub.", vulnerability: "Lập trình viên push code dự án lên repo công cộng cá nhân.", l_inh: 4, i_inh: 3, inh_score: 12, controls: "Quy định cấm đẩy mã nguồn ngân hàng ra ngoài internet.", l_res: 1, i_res: 3, res_score: 3, owner: "Trưởng bộ phận Dev", treatment: "Tích hợp công cụ quét nhạy cảm GitGuardian vào hệ thống GitLab để chặn commit chứa API key/mật khẩu." },
    { id: "RSK-24", asset: "Executive PCs", threat: "Tin tặc giả mạo email CEO để yêu cầu chuyển tiền.", vulnerability: "Chưa triển khai đầy đủ các giao thức bảo mật email (DMARC).", l_inh: 3, i_inh: 4, inh_score: 12, controls: "Sử dụng bộ lọc thư rác (Anti-spam) thông thường.", l_res: 1, i_res: 4, res_score: 4, owner: "Giám đốc ATTT", treatment: "Thiết lập chính sách DMARC (chế độ p=reject), SPF, DKIM; tổ chức diễn tập phishing giả định cho ban lãnh đạo hàng quý." },
    { id: "RSK-25", asset: "Executive PCs", threat: "Laptop của thành viên Ban điều hành bị mất trộm.", vulnerability: "Ổ cứng laptop không được mã hóa bảo mật.", l_inh: 3, i_inh: 3, inh_score: 9, controls: "Đặt mật khẩu đăng nhập hệ điều hành.", l_res: 1, i_res: 3, res_score: 3, owner: "Trưởng nhóm Hạ tầng", treatment: "Kích hoạt mã hóa ổ cứng BitLocker bắt buộc trên 100% laptop làm việc của ban lãnh đạo và cán bộ nhân viên." },
    { id: "RSK-26", asset: "Internet Banking", threat: "Hệ thống bị treo do lượng giao dịch tăng đột biến.", vulnerability: "Không thực hiện đánh giá năng lực tải hệ thống trước chiến dịch.", l_inh: 4, i_inh: 3, inh_score: 12, controls: "Giám sát hiệu năng CPU/RAM máy chủ ứng dụng thời gian thực.", l_res: 2, i_res: 3, res_score: 6, owner: "Giám đốc Công nghệ", treatment: "Tổ chức diễn tập tải giả lập (Load testing); triển khai cơ chế tự động mở rộng (Auto-scaling) trên hạ tầng máy chủ gateway." },
    { id: "RSK-27", asset: "SWIFT Gateway", threat: "Giao dịch viên chia sẻ tài khoản đăng nhập SWIFT.", vulnerability: "Hệ thống cho phép đăng nhập đồng thời nhiều thiết bị.", l_inh: 3, i_inh: 4, inh_score: 12, controls: "Nội quy cấm chia sẻ tài khoản làm việc của ngân hàng.", l_res: 1, i_res: 4, res_score: 4, owner: "Trưởng khối Nguồn vốn", treatment: "Cấu hình giới hạn phiên làm việc trên SWIFT client chỉ cho phép một kết nối hoạt động tại một thời điểm." },
    { id: "RSK-28", asset: "Waste Paper", threat: "Rò rỉ thông tin vay vốn của khách hàng qua thùng rác.", vulnerability: "Tài liệu in ấn hỏng không được hủy trước khi vứt bỏ.", l_inh: 3, i_inh: 3, inh_score: 9, controls: "Quy định yêu cầu nhân viên tự xé nhỏ giấy tờ trước khi bỏ rác.", l_res: 1, i_res: 3, res_score: 3, owner: "Trưởng ban Thiết bị", treatment: "Lắp đặt các thùng chứa giấy hủy có khóa tại các chi nhánh; ký hợp đồng định kỳ với đơn vị hủy tài liệu chuyên nghiệp." },
    { id: "RSK-29", asset: "Teller Workstation", threat: "Khách hàng tự ý quẹt thẻ giao dịch khi nhân viên vắng mặt.", vulnerability: "Giao dịch viên rời quầy nhưng không khóa máy tính.", l_inh: 4, i_inh: 3, inh_score: 12, controls: "Đào tạo nhân viên nội quy khóa máy trạm (Win + L) khi đứng dậy.", l_res: 2, i_res: 3, res_score: 6, owner: "Trưởng khối Bán lẻ", treatment: "Cấu hình chính sách GPO tự động khóa màn hình máy trạm sau tối đa 3 phút không phát sinh hoạt động." },
    { id: "RSK-30", asset: "Mobile Banking", threat: "Tin tặc quét (scrape) thông tin số dư tài khoản hàng loạt.", vulnerability: "API Mobile Banking không giới hạn số lượng request đầu vào.", l_inh: 4, i_inh: 3, inh_score: 12, controls: "Cổng API Gateway cấu hình bảo mật tiêu chuẩn.", l_res: 2, i_res: 3, res_score: 6, owner: "Trưởng khối Số", treatment: "Thiết lập cấu hình giới hạn tần suất gọi API (Rate limiting) và kích hoạt tính năng chống quét dữ liệu trên WAF." }
];

const SIEM_RULES = [
    { id: 1, name: "Active Directory Brute Force", source: "Log domain controller", code: "index=security EventCode=4625 | stats count by TargetUserName, SourceNetworkAddress | where count > 10", severity: "Medium", action: "Tự động khóa tài khoản; báo động SOC kiểm tra." },
    { id: 2, name: "Impossible Travel (Đăng nhập VPN bất hợp lý)", source: "Log Entra ID, VPN gateway", code: "index=security sourcetype=vpn_logs | transaction User | eval travel_time_hours = (duration/3600) | where travel_time_hours < 4 AND distance_miles > 1000", severity: "High", action: "Ngắt kết nối phiên, vô hiệu hóa AD, SMS khẩn cấp." },
    { id: 3, name: "Truy xuất số lượng lớn dữ liệu PII", source: "Audit logs của DB Oracle", code: "index=oracle sourcetype=oracle_audit Action=\"SELECT\" ObjectName=\"CUSTOMER_PII\" | where NOT (AD_Group=\"Credit_Evaluators\" OR AD_Group=\"Customer_Service\") | where count > 50", severity: "Critical", action: "Ngắt DB session, báo cáo DPO, khóa AD admin." },
    { id: 4, name: "DNS Tunneling Đánh cắp dữ liệu", source: "Log DNS Server", code: "index=dns query_type=TXT | eval char_len = len(query) | where char_len > 100 | stats count by src_ip | where count > 200", severity: "Critical", action: "Cách ly máy tính F0 tại switch, quét mã độc." },
    { id: 5, name: "Leo thang đặc quyền lên Domain Admin", source: "Log Domain Controller AD", code: "index=security EventCode=4728 TargetGroupName=\"Domain Admins\" | where NOT (SubjectUserName=\"Admin_Provisioner_Service\")", severity: "Critical", action: "Hạ quyền tài khoản lập tức, khóa AD người thay đổi." },
    { id: 6, name: "SWIFT Gateway bị đăng nhập ngoài giờ", source: "SWIFT Gateway OS logs", code: "index=swift (EventCode=4624 OR Action=\"login\") | eval current_time = strftime(_time, \"%H:%M:%S\") | where current_time > \"20:00:00\" OR current_time < \"06:00:00\"", severity: "High", action: "Khóa tạm tài khoản SWIFT, gọi thoại xác thực." },
    { id: 7, name: "SQL Injection bị WAF chặn đứng", source: "Log F5 WAF", code: "index=waf signature_type=\"SQL-Injection\" action=\"blocked\" | stats count by client_ip | where count > 5", severity: "Medium", action: "Thêm IP nguồn vào blocklist tường lửa trong 24h." },
    { id: 8, name: "Hành vi đổi đuôi file của Ransomware", source: "Windows File Share logs", code: "index=security EventCode=5145 RelativeTargetName IN (\"*.locked\", \"*.crypto\", \"*.wannacry\") | stats count by SourceNetworkAddress", severity: "Critical", action: "Cách ly EDR máy trạm nguồn, khóa port switch mạng." },
    { id: 9, name: "Tạo tài khoản Admin cục bộ trên máy trạm", source: "Log Security Windows", code: "index=security EventCode=4732 TargetGroupName=\"Administrators\" | where NOT (SubjectUserName=\"SYSTEM\")", severity: "High", action: "Đẩy lệnh EDR xóa tài khoản admin vừa tạo." },
    { id: 10, name: "Máy chủ Dev kết nối đến Database Core", source: "Database Firewall logs", code: "index=db_firewall Action=\"connection\" src_zone=\"Development\" dest_ip=\"10.10.1.50\" port=1521", severity: "Critical", action: "Ngắt kết nối tại switch core, cảnh báo CIO/CISO." },
    { id: 11, name: "ATM Controller báo mất kết nối", source: "ATM Controller logs", code: "index=atm sourcetype=atm_controller \"status=offline\"", severity: "High", action: "Báo Trung tâm thẻ, cử bảo vệ kiểm tra tủ ATM." },
    { id: 12, name: "Giao dịch SWIFT liên tiếp bị từ chối", source: "SWIFT Gateway Application logs", code: "index=swift_app status=\"FAILED\" | stats count by operator_id | where count > 5", severity: "Critical", action: "Khóa kênh giao dịch viên, rà soát chứng từ thanh toán." },
    { id: 13, name: "Thực thi PowerShell mã hóa (Base64)", source: "PowerShell Script Block logs", code: "index=security (EventCode=4688 OR EventCode=4104) CommandLine=\"* -enc*\" OR CommandLine=\"* -EncodedCommand*\"", severity: "High", action: "EDR tạm ngưng tiến trình PowerShell, SOC mở ticket." },
    { id: 14, name: "Cố ý dump bộ nhớ bảo mật LSASS", source: "Log Windows Sysmon", code: "index=security sourcetype=sysmon EventCode=10 TargetImage=\"*lsass.exe\" GrantedAccess=\"0x1F1FFF\"", severity: "Critical", action: "EDR cô lập máy trạm LAN lập tức." },
    { id: 15, name: "Xóa dữ liệu số lượng lớn trên máy chủ Backup", source: "Backup Server logs", code: "index=backup Action=\"DELETE\" OR Action=\"PURGE\" | stats count by admin_user | where count > 50", severity: "Critical", action: "Khóa AD quản trị viên sao lưu, ngắt mạng thiết bị lưu trữ." },
    { id: 16, name: "MAC lạ kết nối vào switch chi nhánh", source: "Cisco ISE NAC logs", code: "index=nac \"status=rejected\" AND \"reason=unauthorized_mac\"", severity: "High", action: "Vô hiệu hóa port switch tương ứng, báo chi nhánh." },
    { id: 17, name: "Upload file lên Cloud cá nhân", source: "Proxy Web logs", code: "index=proxy dest_domain IN (\"*drive.google.com*\", \"*dropbox.com*\", \"*onedrive.live.com*\") Action=\"upload\"", severity: "Medium", action: "Chặn tiến trình upload, báo cáo Khối HR xử lý." },
    { id: 18, name: "Quẹt thẻ ATM bất hợp lý (Double Cashout)", source: "NAPAS transaction logs", code: "index=atm_transactions sourcetype=napas_logs | transaction card_number | eval time_diff = duration | where time_diff < 600 AND distance > 50", severity: "High", action: "Tự động khóa tạm thẻ ATM, gửi SMS cảnh báo khách." },
    { id: 19, name: "Kết nối đến IP Botnet (C2)", source: "Firewall Traffic logs", code: "index=firewall dest_ip IN [| inputlookup threat_intelligence_ips.csv | fields ip]", severity: "Critical", action: "EDR cách ly máy trạm bị nhiễm, block IP đen tường lửa biên." },
    { id: 20, name: "Đăng nhập thành công trên tài khoản stale (>90 ngày)", source: "Active Directory Event logs", code: "index=security EventCode=4624 | lookup AD_users UserName OUTPUT InactiveDays | where InactiveDays > 90", severity: "High", action: "Vô hiệu hóa vĩnh viễn tài khoản AD, mở ticket kiểm tra." }
];

const KPIS_DATA = [
    { name: "Thời gian Phát hiện Trung bình (MTTD)", target: "< 10 phút", actual: "7.2 phút", status: "PASS" },
    { name: "Thời gian Phản ứng Trung bình (MTTR)", target: "< 30 phút", actual: "18.5 phút", status: "PASS" },
    { name: "Tỷ lệ Click Email lừa đảo", target: "< 3.0%", actual: "1.8%", status: "PASS" },
    { name: "Tỷ lệ tuân thủ thời gian vá lỗi (Critical)", target: "> 98.0%", actual: "99.2%", status: "PASS" },
    { name: "Phạm vi đẩy log về SIEM tập trung", target: "100.0%", actual: "100.0%", status: "PASS" },
    { name: "Tỷ lệ cán bộ nhân viên cài đặt MFA", target: "100.0%", actual: "100.0%", status: "PASS" },
    { name: "Tỷ lệ cảnh báo giả trên SIEM", target: "< 15.0%", actual: "11.4%", status: "PASS" },
    { name: "Tỷ lệ sự cố lặp lại cùng nguyên nhân", target: "0.0%", actual: "0.0%", status: "PASS" },
    { name: "Tỷ lệ các đợt diễn tập DRP thành công", target: "100.0%", actual: "100.0%", status: "PASS" },
    { name: "Nhân viên hoàn thành khóa đào tạo an ninh", target: "> 99.0%", actual: "99.6%", status: "PASS" }
];

const KRIS_DATA = [
    { name: "Lỗ hổng bảo mật quá hạn vá lỗi", target: "0 trường hợp", actual: "2 trường hợp", status: "WARN" },
    { name: "Tài khoản AD quá hạn active (>90d)", target: "0 tài khoản", actual: "0 tài khoản", status: "PASS" },
    { name: "Số sự kiện truyền tải PII không mã hóa", target: "0 sự kiện", actual: "0 sự kiện", status: "PASS" },
    { name: "Phiên quản trị trực tiếp bypass qua PAM", target: "0 sự kiện", actual: "0 sự kiện", status: "PASS" },
    { name: "Thiết bị thiếu phần mềm CrowdStrike EDR", target: "0 thiết bị", actual: "1 thiết bị", status: "WARN" },
    { name: "Tải file ra mạng ngoài vượt quá 100MB", target: "0 sự kiện", actual: "0 sự kiện", status: "PASS" },
    { name: "Thay đổi hệ thống lỗi gây sập (downtime)", target: "< 3 sự kiện/tháng", actual: "1 sự kiện", status: "PASS" },
    { name: "Số đợt quét dò IP ngoài tường lửa thành công", target: "0 sự kiện", actual: "0 sự kiện", status: "PASS" },
    { name: "Tuổi thọ trung bình của mật khẩu Admin", target: "< 90 Ngày", actual: "32 Ngày", status: "PASS" },
    { name: "Trễ nại báo cáo sự cố lên NHNN/A05 (>24h)", target: "0 trường hợp", actual: "0 trường hợp", status: "PASS" }
];

// --- INCIDENT STEP WORKFLOWS ---
const PLAYBOOKS = {
    ransomware: [
        { title: "1. Xác nhận sự cố", desc: "Agent CrowdStrike EDR báo phát hiện ransomware chạy trên máy chủ. SOC Tuyến 1 kiểm tra tiến trình ghi file mã hóa hàng loạt." },
        { title: "2. Cách ly khẩn cấp", desc: "SOC gửi lệnh khóa logic máy trạm qua EDR. Đội ngũ Infrastructure tắt cổng switch mạng vật lý chứa máy chủ." },
        { title: "3. Tìm F0 phát tán", desc: "SOC kiểm tra email để tìm máy tính click link lừa đảo trước đó. Rà soát AD logs để xác định các tài khoản AD bị lộ." },
        { title: "4. Khôi phục máy chủ", desc: "Format toàn bộ ổ cứng máy chủ bị nhiễm, cài đặt lại OS nền chuẩn và restore dữ liệu từ ổ đĩa sao lưu bất biến offline." },
        { title: "5. Báo cáo NHNN & Khắc phục", desc: "Gửi báo cáo sự cố an ninh lên NHNN trong vòng 24h. Cập nhật bản vá bảo mật và cấu hình thêm chặn dải IP đen tại tường lửa biên." }
    ],
    pdpd: [
        { title: "1. Phát hiện dữ liệu ra", desc: "SIEM rule 3 báo phát hiện lệnh SELECT số lượng lớn trên DB chứa thông tin cá nhân. Log xác nhận xuất file customer thô." },
        { title: "2. Khóa phiên truy cập DB", desc: "Hệ thống CyberArk PAM thực hiện ngắt kết nối session đang chạy. Khối HR khóa tài khoản AD nhân sự vi phạm." },
        { title: "3. Đếm số lượng ảnh hưởng", desc: "DPO rà quét log để xác định các trường dữ liệu bị rò rỉ (CCCD, SĐT...) và đếm chính xác số lượng khách hàng bị ảnh hưởng." },
        { title: "4. Nộp hồ sơ Bộ Công an (A05)", desc: "DPO lập và nộp hồ sơ báo cáo sự cố rò rỉ dữ liệu cá nhân gửi Cục An ninh mạng Bộ Công an trong 24h (Decree 13 Điều 26)." },
        { title: "5. Gửi cảnh báo khách hàng", desc: "Ngân hàng tự động gửi SMS/Email thông báo xin lỗi khách hàng, khuyến nghị đổi mật khẩu e-banking và mở hotline hỗ trợ." }
    ],
    insider: [
        { title: "1. Cảnh báo DLP cổng USB", desc: "Hệ thống DLP máy trạm báo nhân viên X cố ý copy file thiết kế sơ đồ mạng lõi mật của ngân hàng sang USB ngoài." },
        { title: "2. Khóa quyền hạn & Thẻ từ", desc: "Khóa AD và Cloud token của nhân viên. Ban Thiết bị khóa thẻ từ ra vào tòa nhà để ngăn việc tẩu tán thiết bị ra ngoài." },
        { title: "3. Thu bằng chứng số", desc: "Trích xuất video ghi hình phiên làm việc trên PAM. Tạo bản sao đĩa máy trạm (forensic image) và tính toán mã băm SHA-256." },
        { title: "4. Điều tra & Bàn giao Công an", desc: "Chuyển hồ sơ sang ban Pháp chế. Tổ chức cuộc điều trần kỷ luật lao động và bàn giao nhân sự cùng đĩa chứng cứ sang Bộ Công an." },
        { title: "5. Khóa cứng chính sách", desc: "Rà soát lại chính sách Group Policy chặn tính năng đọc ghi thiết bị USB vật lý trên toàn hệ thống mạng máy trạm ngân hàng." }
    ]
};

let activePlaybookKey = "ransomware";
let currentStepIndex = 0;

// ==========================================
// 2. DOM MANIPULATION & INTERACTIVITY (LOGIC GIAO DIỆN)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Sidebar Navigation Tabs
    const navItems = document.querySelectorAll(".nav-item");
    const tabContents = document.querySelectorAll(".tab-content");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetTab = item.getAttribute("data-tab");
            
            navItems.forEach(nav => nav.classList.remove("active"));
            tabContents.forEach(tab => tab.classList.remove("active"));

            item.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });

    // Run Renderers
    renderDashboardCharts();
    renderComplianceMatrix();
    renderComplianceDetails();
    renderRiskMatrix();
    renderSecurityOperations();
    initIncidentPlaybook();
    initAccessRequestForm();
});

// --- CHART RENDERING (VẼ BIỂU ĐỒ TRỰC QUAN) ---
function renderDashboardCharts() {
    // Radial chart
    const radialContainer = document.getElementById("radial-chart-container");
    if (radialContainer) {
        radialContainer.innerHTML = `
            <svg class="radial-svg" viewBox="0 0 100 100">
                <circle class="radial-bg" cx="50" cy="50" r="40" fill="transparent" stroke="var(--border)" stroke-width="8"/>
                <circle class="radial-bar" cx="50" cy="50" r="40" fill="transparent" stroke="var(--success)" stroke-width="8"
                    stroke-dasharray="251.2" stroke-dashoffset="15.7" stroke-linecap="round"/>
                <text class="radial-text" x="50" y="55" text-anchor="middle" fill="var(--text)" font-family="var(--font-header)" font-weight="700" font-size="16">93.75%</text>
            </svg>
        `;
    }

    // Trend line chart
    const trendContainer = document.getElementById("trend-chart-container");
    if (trendContainer) {
        trendContainer.innerHTML = `
            <svg class="trend-svg" viewBox="0 0 300 120" preserveAspectRatio="none">
                <line x1="10" y1="20" x2="290" y2="20" stroke="var(--border)" stroke-dasharray="4"/>
                <line x1="10" y1="60" x2="290" y2="60" stroke="var(--border)" stroke-dasharray="4"/>
                <line x1="10" y1="100" x2="290" y2="100" stroke="var(--border)"/>
                
                <path d="M10,100 L10,30 L66,35 L122,50 L178,70 L234,80 L290,90 L290,100 Z" fill="url(#trend-gradient)" opacity="0.15"/>
                <path d="M10,30 L66,35 L122,50 L178,70 L234,80 L290,90" fill="none" stroke="var(--coral)" stroke-width="3"/>
                
                <circle cx="10" cy="30" r="4" fill="var(--coral)" />
                <circle cx="66" cy="35" r="4" fill="var(--coral)" />
                <circle cx="122" cy="50" r="4" fill="var(--coral)" />
                <circle cx="178" cy="70" r="4" fill="var(--coral)" />
                <circle cx="234" cy="80" r="4" fill="var(--coral)" />
                <circle cx="290" cy="90" r="4" fill="var(--coral)" />
                
                <defs>
                    <linearGradient id="trend-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="var(--coral)" />
                        <stop offset="100%" stop-color="transparent" />
                    </linearGradient>
                </defs>
            </svg>
            <div class="trend-labels">
                <span>Tháng 1 (20)</span>
                <span>Tháng 2 (19)</span>
                <span>Tháng 3 (16)</span>
                <span>Tháng 4 (12)</span>
                <span>Tháng 5 (10)</span>
                <span>Tháng 6 (8)</span>
            </div>
        `;
    }
}

// --- COMPLIANCE TAB RENDERER ---
function renderComplianceMatrix() {
    const tableBody = document.getElementById("compliance-tbody");
    const searchInput = document.getElementById("compliance-search");
    const filterBtns = document.querySelectorAll(".filter-btn");

    let currentMappingFilter = "all";

    function populateTable(filteredData) {
        if (!tableBody) return;
        tableBody.innerHTML = "";
        
        filteredData.forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td class="font-semibold text-primary" style="white-space:nowrap">${row.control}</td>
                <td>${row.domain}</td>
                <td class="text-secondary">${row.guidance}</td>
                <td><span class="badge badge-warning">${row.circular09}</span></td>
                <td><span class="badge badge-success">${row.decree13}</span></td>
                <td><span class="badge badge-info">${row.cybersec}</span></td>
                <td class="text-secondary" style="font-size: 13px">${row.evidence}</td>
                <td class="font-semibold" style="white-space:nowrap; text-align:center">${row.owner}</td>
            `;
            tableBody.appendChild(tr);
        });
    }

    function filterData() {
        const query = searchInput.value.toLowerCase();
        
        const filtered = CONTROLS_DATA.filter(item => {
            const matchesQuery = item.control.toLowerCase().includes(query) ||
                                 item.domain.toLowerCase().includes(query) ||
                                 item.guidance.toLowerCase().includes(query) ||
                                 item.evidence.toLowerCase().includes(query);
            
            if (currentMappingFilter === "all") return matchesQuery;
            if (currentMappingFilter === "c09") return matchesQuery && item.circular09 !== "N/A";
            if (currentMappingFilter === "d13") return matchesQuery && item.decree13 !== "N/A";
            if (currentMappingFilter === "csl") return matchesQuery && item.cybersec !== "N/A";
            return matchesQuery;
        });
        
        populateTable(filtered);
    }

    if (searchInput) {
        searchInput.addEventListener("input", filterData);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentMappingFilter = btn.getAttribute("data-filter");
            filterData();
        });
    });

    populateTable(CONTROLS_DATA);
}

// --- RISK REGISTRY TAB RENDERER ---
function renderRiskMatrix() {
    const matrixGrid = document.getElementById("risk-matrix-grid");
    const riskTbody = document.getElementById("risks-tbody");
    const searchInput = document.getElementById("risk-search");

    if (!matrixGrid || !riskTbody) return;

    // Generate Risk Grid count matrix (Inherent coordinates)
    const matrixCount = Array(5).fill(0).map(() => Array(5).fill(0));
    const matrixItems = Array(5).fill(0).map(() => Array(5).fill([]));

    RISKS_DATA.forEach(risk => {
        const l_idx = risk.l_inh - 1;
        const i_idx = risk.i_inh - 1;
        matrixCount[l_idx][i_idx] += 1;
        matrixItems[l_idx][i_idx] = [...matrixItems[l_idx][i_idx], risk];
    });

    function populateRiskTable(filteredData) {
        riskTbody.innerHTML = "";
        if (filteredData.length === 0) {
            riskTbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-secondary)">Không tìm thấy kịch bản rủi ro phù hợp.</td></tr>`;
            return;
        }

        filteredData.forEach(row => {
            const tr = document.createElement("tr");
            tr.className = "risk-tr";
            
            const inh_badge = row.inh_score >= 20 ? "badge-danger" : (row.inh_score >= 10 ? "badge-warning" : "badge-info");
            const res_badge = row.res_score >= 20 ? "badge-danger" : (row.res_score >= 10 ? "badge-warning" : "badge-info");
            
            tr.innerHTML = `
                <td class="font-semibold text-primary" style="white-space:nowrap">${row.id}</td>
                <td class="font-semibold">${row.asset}</td>
                <td>
                    <div style="font-weight:600">${row.threat}</div>
                    <div style="font-size:12px; color:var(--text-secondary); margin-top:2px">Điểm yếu: ${row.vulnerability}</div>
                </td>
                <td style="text-align:center"><span class="badge ${inh_badge}">${row.l_inh} x ${row.i_inh} (${row.inh_score})</span></td>
                <td class="text-secondary" style="font-size:13px">${row.controls}</td>
                <td style="text-align:center"><span class="badge ${res_badge}">${row.l_res} x ${row.i_res} (${row.res_score})</span></td>
                <td><span style="font-size:13px; color:var(--primary); font-weight:600">${row.treatment}</span></td>
                <td class="font-semibold" style="white-space:nowrap">${row.owner}</td>
            `;
            riskTbody.appendChild(tr);
        });
    }

    // Draw Heatmap matrix (Likelihood on Y-axis descending, Impact on X-axis ascending)
    matrixGrid.innerHTML = "";
    for (let l = 4; l >= 0; l--) {
        const yLabel = document.createElement("div");
        yLabel.className = "matrix-label-y";
        yLabel.innerText = l + 1;
        matrixGrid.appendChild(yLabel);

        for (let i = 0; i < 5; i++) {
            const count = matrixCount[l][i];
            const cellValue = (l + 1) * (i + 1);
            let riskClass = "cell-low";
            if (cellValue >= 20) riskClass = "cell-critical";
            else if (cellValue >= 10) riskClass = "cell-high";
            else if (cellValue >= 5) riskClass = "cell-medium";

            const cell = document.createElement("div");
            cell.className = `matrix-cell ${riskClass}`;
            cell.innerHTML = `
                <span class="cell-count">${count}</span>
                <span class="cell-score">${l+1}x${i+1}</span>
            `;

            cell.addEventListener("click", () => {
                document.querySelectorAll(".matrix-cell").forEach(c => c.style.outline = "none");
                cell.style.outline = "2px solid var(--primary)";
                populateRiskTable(matrixItems[l][i]);
            });

            matrixGrid.appendChild(cell);
        }
    }

    // X-axis labeling
    const corner = document.createElement("div");
    matrixGrid.appendChild(corner);
    for (let i = 1; i <= 5; i++) {
        const xLabel = document.createElement("div");
        xLabel.className = "matrix-label-x";
        xLabel.innerText = i;
        matrixGrid.appendChild(xLabel);
    }

    // Search input handler
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase();
            const filtered = RISKS_DATA.filter(item => {
                return item.id.toLowerCase().includes(query) ||
                       item.asset.toLowerCase().includes(query) ||
                       item.threat.toLowerCase().includes(query) ||
                       item.treatment.toLowerCase().includes(query);
            });
            populateRiskTable(filtered);
        });
    }

    populateRiskTable(RISKS_DATA);
}

// --- TAB 4: SECURITY OPERATIONS ---
function renderSecurityOperations() {
    const kpiGrid = document.getElementById("kpi-grid");
    const kriGrid = document.getElementById("kri-grid");
    const ruleContainer = document.getElementById("siem-rules-container");

    if (kpiGrid) {
        kpiGrid.innerHTML = "";
        KPIS_DATA.forEach(kpi => {
            const card = document.createElement("div");
            card.className = "metric-card";
            card.innerHTML = `
                <div class="metric-title">${kpi.name}</div>
                <div class="metric-value text-emerald">${kpi.actual}</div>
                <div style="display:flex; justify-content:space-between; margin-top:8px; font-size:12px">
                    <span style="color:var(--text-secondary)">Mục tiêu: ${kpi.target}</span>
                    <span class="badge badge-success">${kpi.status}</span>
                </div>
            `;
            kpiGrid.appendChild(card);
        });
    }

    if (kriGrid) {
        kriGrid.innerHTML = "";
        KRIS_DATA.forEach(kri => {
            const card = document.createElement("div");
            card.className = "metric-card";
            const valClass = kri.status === "WARN" ? "text-coral" : "text-emerald";
            const badgeClass = kri.status === "WARN" ? "badge-danger" : "badge-success";
            card.innerHTML = `
                <div class="metric-title">${kri.name}</div>
                <div class="metric-value ${valClass}">${kri.actual}</div>
                <div style="display:flex; justify-content:space-between; margin-top:8px; font-size:12px">
                    <span style="color:var(--text-secondary)">Ngưỡng kích hoạt: ${kri.target}</span>
                    <span class="badge ${badgeClass}">${kri.status}</span>
                </div>
            `;
            kriGrid.appendChild(card);
        });
    }

    if (ruleContainer) {
        ruleContainer.innerHTML = "";
        SIEM_RULES.forEach(rule => {
            const item = document.createElement("div");
            item.className = "siem-rule-item";
            const badgeClass = rule.severity === "Critical" ? "badge-danger" : (rule.severity === "High" ? "badge-warning" : "badge-info");
            
            item.innerHTML = `
                <div class="siem-header">
                    <span class="siem-name">${rule.id}. ${rule.name}</span>
                    <div style="display:flex; gap:8px">
                        <span class="badge badge-info">${rule.source}</span>
                        <span class="badge ${badgeClass}">${rule.severity}</span>
                    </div>
                </div>
                <div class="siem-code-wrapper">
                    <pre class="siem-code"><code>${rule.code}</code></pre>
                </div>
                <div class="siem-action"><strong style="color:var(--primary)">Hành động Cô lập (SLA Containment):</strong> ${rule.action}</div>
            `;
            ruleContainer.appendChild(item);
        });
    }
}

// --- TAB 5: INCIDENT PLAYBOOKS ---
function initIncidentPlaybook() {
    const menuItems = document.querySelectorAll(".playbook-menu-item");
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuItems.forEach(m => m.classList.remove("active"));
            item.classList.add("active");
            activePlaybookKey = item.getAttribute("data-playbook");
            currentStepIndex = 0;
            renderPlaybookSteps();
        });
    });
    renderPlaybookSteps();
}

function renderPlaybookSteps() {
    const stepContainer = document.getElementById("playbook-steps-container");
    const playbookData = PLAYBOOKS[activePlaybookKey];
    if (!stepContainer) return;
    
    stepContainer.innerHTML = "";
    playbookData.forEach((step, idx) => {
        const item = document.createElement("div");
        item.className = "playbook-step-card";
        if (idx === currentStepIndex) item.className += " active";
        
        item.innerHTML = `
            <div class="step-num">${idx + 1}</div>
            <div class="step-content">
                <div class="step-title">${step.title}</div>
                <div class="step-desc">${step.desc}</div>
            </div>
        `;
        
        item.addEventListener("click", () => {
            currentStepIndex = idx;
            renderPlaybookSteps();
        });
        
        stepContainer.appendChild(item);
    });
}

// --- ACCESS REQUEST SIMULATOR ---
function initAccessRequestForm() {
    const form = document.getElementById("mock-uarf");
    const responseBox = document.getElementById("form-response-box");
    if (!form || !responseBox) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("uarf-name").value;
        const system = document.getElementById("uarf-system").value;
        const role = document.getElementById("uarf-role").value;

        // Perform mock SoD conflict verification
        let sodStatus = '<span class="text-emerald font-semibold">[HỢP LỆ] Không phát hiện xung đột SoD</span>';
        let approvalChain = `
            <div class="approval-step text-emerald">✔ 1. Quản lý trực tiếp: Đã duyệt (Tự động)</div>
            <div class="approval-step text-emerald">✔ 2. Chủ sở hữu hệ thống: Đã duyệt</div>
            <div class="approval-step text-emerald">✔ 3. Vận hành IT: Đã cấp quyền</div>
        `;

        if (system === "Core Banking (T24)" && role === "Developer Admin") {
            sodStatus = '<span class="text-coral font-semibold">❌ [BỊ CHẶN] Xung đột Phân tách Nhiệm vụ (SoD): Lập trình viên không được phép có tài khoản đặc quyền sửa đổi trên môi trường Production!</span>';
            approvalChain = `
                <div class="approval-step text-emerald">✔ 1. Quản lý trực tiếp: Đã duyệt (Tự động)</div>
                <div class="approval-step text-coral">❌ 2. Trưởng bộ phận An ninh Core: TỪ CHỐI (Vi phạm SoD)</div>
                <div class="approval-step text-secondary">⏰ 3. Cần phê duyệt ngoại lệ có chữ ký CISO</div>
            `;
        }

        responseBox.style.display = "block";
        responseBox.innerHTML = `
            <h4 style="margin-top:0; border-bottom:1px solid var(--border); padding-bottom:8px">🔐 DieuBank Identity Access Provisioning</h4>
            <div style="margin-bottom:8px"><strong>Mã yêu cầu:</strong> DB-REQ-${Math.floor(Math.random() * 90000 + 10000)}</div>
            <div style="margin-bottom:8px"><strong>Nhân viên:</strong> ${name}</div>
            <div style="margin-bottom:8px"><strong>Hệ thống / Vai trò:</strong> ${system} - ${role}</div>
            <div style="margin-bottom:12px"><strong>Kiểm tra SoD:</strong> ${sodStatus}</div>
            <div style="margin-bottom:8px"><strong>Tiến độ phê duyệt:</strong></div>
            <div>${approvalChain}</div>
        `;
    });
}

// ==========================================
// 8. TIÊU CHUẨN CHI TIẾT & SUB-TAB NAVIGATION
// ==========================================

const STANDARDS_DETAILS = [
    {
        id: "iso",
        title: "ISO/IEC 27001:2022, 27002:2022 & 27005:2022",
        subtitle: "Hệ thống Quản lý An toàn Thông tin & Quản lý Rủi ro",
        badge: "ISO",
        color: "cyan",
        sections: [
            {
                heading: "Cấu trúc các Điều khoản chính (Điều 4 - Điều 10)",
                items: [
                    "<strong>Điều 4: Bối cảnh tổ chức:</strong> Hiểu rõ tổ chức và bối cảnh của tổ chức, xác định phạm vi của ISMS.",
                    "<strong>Điều 5: Lãnh đạo:</strong> Sự cam kết của Ban lãnh đạo, thiết lập chính sách ATTT và phân công vai trò.",
                    "<strong>Điều 6: Hoạch định:</strong> Nhận diện và đánh giá rủi ro ATTT, hoạch định các biện pháp xử lý rủi ro.",
                    "<strong>Điều 7: Hỗ trợ:</strong> Cung cấp nguồn lực, năng lực nhân sự, nhận thức và thông tin dạng văn bản.",
                    "<strong>Điều 8: Vận hành:</strong> Thực hiện đánh giá và xử lý rủi ro ATTT trong thực tế.",
                    "<strong>Điều 9: Đánh giá hiệu năng:</strong> Giám sát, đo lường, phân tích, đánh giá, kiểm toán nội bộ và xem xét của lãnh đạo.",
                    "<strong>Điều 10: Cải tiến:</strong> Xử lý sự không phù hợp, thực hiện hành động khắc phục và cải tiến liên tục."
                ]
            },
            {
                heading: "Cấu trúc Phụ lục A mới (93 Kiểm soát - 4 Nhóm chính)",
                items: [
                    "<strong>A.5 Kiểm soát Tổ chức (37 kiểm soát):</strong> Gồm các kiểm soát về chính sách an ninh, quản lý tài sản, phân tách nhiệm vụ, liên hệ cơ quan chức năng, quản lý thiết bị, an toàn thông tin trong quản lý dự án...",
                    "<strong>A.6 Kiểm soát Nhân sự (8 kiểm soát):</strong> Gồm thẩm định lý lịch tuyển dụng, các điều khoản hợp đồng lao động, đào tạo và nâng cao nhận thức, quy trình xử lý kỷ luật, trách nhiệm khi chấm dứt hoặc thay đổi công việc.",
                    "<strong>A.7 Kiểm soát Vật lý (14 kiểm soát):</strong> Ranh giới an ninh vật lý, kiểm soát ra vào vật lý, bảo vệ thiết bị, an toàn hạ tầng tiện ích, an toàn cáp dẫn, lưu trữ và tiêu hủy thiết bị an toàn.",
                    "<strong>A.8 Kiểm soát Công nghệ (34 kiểm soát):</strong> Kiểm soát quyền truy cập, xác thực đa yếu tố (MFA), mã hóa dữ liệu và quản lý khóa mật mã (HSM), phòng chống mã độc (EDR), quản lý lỗ hổng, giám sát SOC tập trung, bảo vệ ứng dụng web (WAF)."
                ]
            },
            {
                heading: "ISO/IEC 27005:2022 - Quản lý Rủi ro An toàn Thông tin",
                items: [
                    "<strong>Thiết lập bối cảnh (Context):</strong> Xác định các tiêu chí đánh giá rủi ro, khẩu vị rủi ro và phạm vi hệ thống.",
                    "<strong>Đánh giá rủi ro (Risk Assessment):</strong> Nhận diện các mối đe dọa, điểm yếu bảo mật, tính toán khả năng xảy ra (Likelihood) và mức độ tác động (Impact) để xác định điểm Rủi ro Tiềm tàng (Inherent Risk).",
                    "<strong>Xử lý rủi ro (Treatment):</strong> Áp dụng kiểm soát để giảm thiểu rủi ro, chuyển giao rủi ro (mua bảo hiểm), tránh rủi ro (dừng hoạt động) hoặc chấp nhận rủi ro (nếu dưới ngưỡng khẩu vị) nhằm đưa điểm rủi ro về ngưỡng Rủi ro Còn lại (Residual Risk) an toàn.",
                    "<strong>Truyền thông và Giám sát:</strong> Báo cáo định kỳ Ban lãnh đạo, giám sát sự thay đổi của các mối đe dọa để điều chỉnh kiểm soát."
                ]
            }
        ]
    },
    {
        id: "c09",
        title: "Thông tư 09/2020/TT-NHNN",
        subtitle: "Quy định An toàn Hệ thống Thông tin trong Hoạt động Ngân hàng",
        badge: "TT 09",
        color: "warning",
        sections: [
            {
                heading: "Phân loại Cấp độ Hệ thống Thông tin",
                items: [
                    "<strong>Cấp độ 1:</strong> Hệ thống thông tin nội bộ chỉ phục vụ nhu cầu xử lý thông tin cá nhân cơ bản, không ảnh hưởng đến hoạt động chung khi gặp sự cố.",
                    "<strong>Cấp độ 2:</strong> Hệ thống phục vụ các hoạt động nghiệp vụ phụ trợ của ngân hàng.",
                    "<strong>Cấp độ 3 (Trọng yếu):</strong> Các hệ thống lõi hoạt động nghiệp vụ chính như <strong>Core Banking (Temenos T24)</strong>, <strong>Cổng thanh toán</strong>, <strong>Core Card</strong>, <strong>SWIFT Gateway</strong>, <strong>Ngân hàng điện tử (E-Banking)</strong>.",
                    "<strong>Cấp độ 4:</strong> Hệ thống thông tin cấp quốc gia phục vụ liên ngân hàng hoặc thanh toán bù trừ.",
                    "<strong>Cấp độ 5:</strong> Hệ thống thông tin đặc biệt quan trọng phục vụ an ninh tiền tệ quốc gia."
                ]
            },
            {
                heading: "Các yêu cầu bắt buộc đối với Hệ thống Cấp độ 3 trở lên tại DieuBank",
                items: [
                    "<strong>Điều 11 - Tổ chức ATTT:</strong> Tách biệt hoàn toàn giữa bộ phận vận hành CNTT và bộ phận quản lý/giám sát an toàn thông tin (độc lập báo cáo CISO/CRO).",
                    "<strong>Điều 22 - Giám sát ATTT:</strong> Phải thiết lập hệ thống giám sát an toàn thông tin tập trung, vận hành Trung tâm SOC giám sát log liên tục 24/7 để phát hiện các cuộc tấn công mạng theo thời gian thực.",
                    "<strong>Điều 25 - Hoạt động liên tục (BCP/DRP):</strong> Xây dựng hạ tầng dự phòng (Disaster Recovery Site) cách biệt vật lý; thực hiện sao lưu cách ly (offline/immutable); tổ chức diễn tập chuyển mạch khôi phục tối thiểu 1 lần/năm.",
                    "<strong>Điều 27 - Kiểm toán độc lập:</strong> Thực hiện kiểm toán an toàn thông tin độc lập định kỳ tối thiểu 1 lần/năm bởi tổ chức kiểm toán độc lập bên ngoài hoặc bộ phận kiểm toán chuyên biệt."
                ]
            }
        ]
    },
    {
        id: "d13",
        title: "Nghị định 13/2023/NĐ-CP (PDPD)",
        subtitle: "Quy định về Bảo vệ Dữ liệu Cá nhân tại Việt Nam",
        badge: "NĐ 13",
        color: "success",
        sections: [
            {
                heading: "Phân loại Dữ liệu Cá nhân của khách hàng DieuBank",
                items: [
                    "<strong>Dữ liệu cá nhân cơ bản:</strong> Họ tên, ngày sinh, giới tính, quốc tịch, nơi thường trú, số điện thoại, số định danh cá nhân (CCCD/CMND), địa chỉ email...",
                    "<strong>Dữ liệu cá nhân nhạy cảm (Điều 3):</strong> Rất quan trọng trong ngành ngân hàng, bao gồm: <strong>Thông tin tài khoản ngân hàng</strong>, <strong>thông tin thẻ tín dụng/ghi nợ</strong>, lịch sử giao dịch tài chính, dữ liệu sinh trắc học dùng để xác thực (khuôn mặt, vân tay), vị trí thực tế của khách hàng."
                ]
            },
            {
                heading: "11 Quyền cốt lõi của Chủ thể Dữ liệu (Điều 9)",
                items: [
                    "Khách hàng có quyền: Được biết hoạt động xử lý dữ liệu; Đồng ý hoặc rút lại sự đồng ý; Truy cập để chỉnh sửa; Yêu cầu xóa dữ liệu (DSR - Data Subject Request); Yêu cầu hạn chế xử lý; Cung cấp dữ liệu cho bên thứ ba; Phản đối xử lý dữ liệu; Khiếu nại, tố cáo, khởi kiện; Yêu cầu bồi thường thiệt hại; Tự bảo vệ dữ liệu."
                ]
            },
            {
                heading: "Nghĩa vụ Tuân thủ hành chính của DieuBank",
                items: [
                    "<strong>Bổ nhiệm DPO chuyên trách (Điều 28):</strong> Thiết lập vị trí Nhân sự bảo vệ dữ liệu cá nhân chuyên trách (DPO) và thành lập bộ phận Bảo vệ dữ liệu cá nhân nội bộ để kiểm soát tuân thủ.",
                    "<strong>Lập Hồ sơ đánh giá tác động DPIA (Điều 38):</strong> Lập và lưu giữ Hồ sơ đánh giá tác động xử lý dữ liệu cá nhân (DPIA) theo Mẫu số 02 của Nghị định, gửi báo cáo về Cục An ninh mạng và Phòng chống tội phạm sử dụng công nghệ cao (A05) - Bộ Công an trong vòng 60 ngày kể từ ngày bắt đầu hoạt động xử lý.",
                    "<strong>Mã hóa & Giám sát truy cập:</strong> Bắt buộc mã hóa dữ liệu nhạy cảm ở trạng thái lưu trữ (Encryption at Rest) và trong quá trình truyền tải (Encryption in Transit), ghi nhận lịch sử (logging) mọi phiên truy xuất dữ liệu cá nhân khách hàng."
                ]
            }
        ]
    },
    {
        id: "csl",
        title: "Luật An ninh mạng 2018",
        subtitle: "Bảo vệ An ninh Quốc gia và Trật tự An toàn Xã hội trên Không gian mạng",
        badge: "LANM",
        color: "info",
        sections: [
            {
                heading: "Quy định về Lưu trữ dữ liệu tại Việt Nam (Điều 26)",
                items: [
                    "DieuBank và các đơn vị cung cấp dịch vụ viễn thông, internet tại Việt Nam có hoạt động thu thập, xử lý dữ liệu về thông tin cá nhân của người sử dụng dịch vụ tại Việt Nam bắt buộc <strong>phải lưu trữ dữ liệu này tại Việt Nam</strong>.",
                    "Các loại dữ liệu phải lưu trữ trong nước bao gồm: Dữ liệu về thông tin cá nhân của người sử dụng; Dữ liệu do người sử dụng tạo ra tại Việt Nam (lịch sử giao dịch, tin nhắn...); Dữ liệu về mối quan hệ của người sử dụng dịch vụ."
                ]
            },
            {
                heading: "Giám sát An ninh mạng hệ thống quan trọng (Điều 27)",
                items: [
                    "Hệ thống thông tin của DieuBank thuộc nhóm hệ thống quan trọng phục vụ hoạt động tài chính quốc gia. Ngân hàng có trách nhiệm phối hợp với lực lượng chuyên chuyên trách bảo vệ an ninh mạng (A05 - Bộ Công an) để kiểm tra, đánh giá an ninh mạng định kỳ và giám sát kết nối từ xa.",
                    "Triển khai các phương án kỹ thuật như phân vùng mạng lõi độc lập, cài đặt hệ thống phát hiện xâm nhập (IDS/IPS), và thiết lập quy trình quản lý điểm yếu bảo mật."
                ]
            },
            {
                heading: "Nghĩa vụ Báo cáo Sự cố An ninh mạng",
                items: [
                    "Khi xảy ra sự cố tấn công mạng, xâm phạm an ninh mạng nghiêm trọng, DieuBank bắt buộc phải gửi thông báo báo cáo sự cố cho cơ quan chuyên trách bảo vệ an ninh mạng trong vòng <strong>24 giờ</strong> kể từ thời điểm phát hiện sự cố để phối hợp ứng cứu."
                ]
            }
        ]
    }
];

function renderComplianceDetails() {
    const container = document.getElementById("compliance-subtab-details");
    if (!container) return;
    
    container.innerHTML = "";
    
    const grid = document.createElement("div");
    grid.className = "grid-2";
    
    STANDARDS_DETAILS.forEach(std => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.height = "100%";
        
        let badgeColor = "var(--primary)";
        if (std.color === "success") badgeColor = "var(--success)";
        if (std.color === "warning") badgeColor = "var(--warning)";
        if (std.color === "info") badgeColor = "var(--info)";
        
        let sectionsHTML = "";
        std.sections.forEach(sec => {
            let itemsHTML = "";
            sec.items.forEach(item => {
                itemsHTML += `<li style="margin-bottom: 8px; font-size: 14px; color: var(--text);">${item}</li>`;
            });
            sectionsHTML += `
                <div style="margin-top: 16px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 12px;">
                    <h4 style="font-size:15px; color: ${badgeColor}; margin-bottom: 10px; font-family: var(--font-header); font-weight: 600;">${sec.heading}</h4>
                    <ul style="padding-left: 20px; list-style-type: square; color: var(--text-secondary);">
                        ${itemsHTML}
                    </ul>
                </div>
            `;
        });
        
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
                <span class="badge" style="background: rgba(255,255,255,0.05); border: 1px solid ${badgeColor}; color: ${badgeColor}; font-weight: 700;">${std.badge}</span>
                <span style="font-size: 12px; color: var(--text-secondary); font-weight: 500;">DieuBank GRC</span>
            </div>
            <h3 style="margin-bottom: 4px; font-size: 18px; font-weight: 700; color: var(--text); font-family: var(--font-header);">${std.title}</h3>
            <div style="font-size: 13px; color: var(--text-secondary); font-style: italic; margin-bottom: 16px;">${std.subtitle}</div>
            <div style="flex-grow: 1;">
                ${sectionsHTML}
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
}

window.switchComplianceSubTab = function(tabName) {
    const detailsTab = document.getElementById("compliance-subtab-details");
    const matrixTab = document.getElementById("compliance-subtab-matrix");
    const detailsBtn = document.getElementById("btn-subtab-details");
    const matrixBtn = document.getElementById("btn-subtab-matrix");
    
    if (!detailsTab || !matrixTab || !detailsBtn || !matrixBtn) return;
    
    if (tabName === 'details') {
        detailsTab.style.display = "block";
        matrixTab.style.display = "none";
        detailsBtn.classList.add("active");
        matrixBtn.classList.remove("active");
    } else {
        detailsTab.style.display = "none";
        matrixTab.style.display = "block";
        detailsBtn.classList.remove("active");
        matrixBtn.classList.add("active");
    }
};
