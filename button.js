document.addEventListener("DOMContentLoaded", function() {
    // Lấy phần tử có class 'link' chứa văn bản 'CLB Thể Thao'
    let linkTheThao = document.querySelector("a.link[href='thetheo.html']");
    
    if (linkTheThao) {
        linkTheThao.addEventListener("click", function(event) {
            event.preventDefault(); // Ngăn chặn chuyển trang mặc định
            window.location.href = "thetheo.html"; // Chuyển sang trang CLB Thể Thao
        });
    }
});
