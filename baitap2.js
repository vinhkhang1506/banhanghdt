
function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user" && password === "pass") {
        resolve({ token: "abcxyz", userId: 123 });
      } else {
        reject("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    }, 1500);
  });
}


function getPosts(userId, token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 123 && token === "abcxyz") {
        resolve(["Bài viết 1", "Bài viết 2", "Bài viết 3"]);
      } else {
        reject("Token không hợp lệ hoặc người dùng không tồn tại!");
      }
    }, 2000);
  });
}

// Hàm chính xử lý tuần tự
async function processLoginAndFetchPosts(username, password) {
  try {
    console.log("Bắt đầu đăng nhập...");
    const loginResult = await loginUser(username, password);
    console.log("Đăng nhập thành công:", loginResult);

    console.log("Đang lấy bài viết...");
    const posts = await getPosts(loginResult.userId, loginResult.token);
    console.log("Danh sách bài viết:", posts);
  } catch (error) {
    console.error("Lỗi:", error);
  }
}


processLoginAndFetchPosts("user", "pass");


