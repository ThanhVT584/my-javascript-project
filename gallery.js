function upDate(previewPic) {
    //In thông báo kiểm tra sự kiện đã kích hoạt
    console.log("Event triggered: Mouseover / Focus on image");
    
    //In thuộc tính alt và src của ảnh được di chuột
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    //Lấy phần tử div có id="image"
    var imageDiv = document.getElementById("image");

    //Thay đổi nội dung chữ thành alt của ảnh
    imageDiv.innerHTML = previewPic.alt;

    //Thay đổi hình nền thành đường dẫn src của ảnh
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    //Lấy phần tử div có id="image"
    var imageDiv = document.getElementById("image");

    //Trả hình nền về trạng thái ban đầu
    imageDiv.style.backgroundImage = "url('')";

    //Trả lại đoạn văn bản ban đầu
    imageDiv.innerHTML = "Hover over an image below to display here.";
}