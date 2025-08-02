// Biến điều khiển lỗi
let isError = false;

// Hàm giả lập API
function fetchUserProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isError) {
        resolve({
          id: 1,
          name: "Alice",
          email: "alice@example.com"
        });
      } else {
        reject("Không thể tải hồ sơ người dùng");
      }
    }, 2000);
  });
}

// Hàm async sử dụng await
async function getUserProfile() {
  try {
    console.log("Đang tải hồ sơ người dùng...");
    const user = await fetchUserProfile();
    console.log("Thông tin người dùng:", user);
  } catch (error) {
    console.error("Lỗi:", error);
  }
}

// Kiểm tra:
getUserProfile(); // Thử chạy với isError = false => Thành công
// Thay isError = true rồi chạy lại để kiểm tra lỗi
