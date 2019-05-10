## Tank Game for demo at CodeGym
Hướng dẫn làm ứng dụng xe tăng

##### 1. Tạo các file và các lớp cần thiết
* File index.html chứa thẻ canvas và nhúng các file .js khác
* File constants.js chứa các hằng số
* File index.js chứa các hàm khởi chạy chương trình
* File tank.js chứa lớp Tank đại diện cho xe tăng
* File gameboard.js chứa lớp GameBoard đại diện cho màn hình của trò chơi
##### 2. Vẽ được xe tăng dạng 1 hình vuông
* Xây dựng lớp Tank với các thuộc tính và phương thức:
    * x: Toạ độ ngang
    * y: Toạ độ dọc
    * color: Màu xe
    * board: GameBoard mà dùng để hiển thị xe tăng
    * render(): Hiển thị xe tăng lên trên Canvas của GameBoard
* Xây dựng lớp GameBoard với các thuộc tính và phương thức:
    * canvas: Đối tượng canvas dùng để vẽ các thành phần của GameBoard
    * tank: Một chiếc xe tăng
    * render(): Hiển thị các thành phần của GameBoard lên trên Canvas
        * Để hiển thị xe tăng thì chỉ cần gọi đến phương thức tank.render()
* Trong file index.js, tạo một đối tượng GameBoard và gọi đến phương thức render() của nó
##### 3. Vẽ được nòng súng trước xe tăng
* Bổ sung thuộc tính direction để đại diện cho hướng di chuyển của xe tăng, direction có thể có 4 giá trị là: 
    * DIRECTION_UP = 1
    * DIRECTION_RIGHT = 2
    * DIRECTION_DOWN = 3
    * DIRECTION_LEFT = 4
* Trong phương thức render() của lớp Tank, vẽ thêm một hình chữ nhật nhỏ gắn liền với hình vuông to của xe tăng. Tuỳ theo hướng của xe tăng mà hình chữ nhật nhỏ sẽ gắn với cạnh tương ứng của xe tăng
##### 4. Xe tăng di chuyển được theo các hướng
* Trong lớp Tank bổ sung thêm 4 phương thức: moveUp(), moveRight(), moveDown(), moveLeft(). Các phương thức này sẽ thay đổi toạ độ x và y của xe tăng tương ứng tuỳ theo hướng di chuyển
* Trong lớp Tank bổ sung thêm phương thức move(), phương thức này sẽ tuỳ theo hướng di chuyển của xe tăng (thuộc tính direction) để gọi đến một trong 4 phương thức tương ứng của nó
* Trong lớp GameBoard, bổ sung phương thức action(keyCode) để thực hiện các hành động tương ứng với các phím.
    * Các phím Trái, Lên, Phải, Xuống có các giá trị là 37, 38, 39, 40
    * Đối với từng mã keyCode khác nhau thì thay đổi hướng của tank tương ứng (sử dụng phương thức setDirection) và di chuyển (sử dụng phương thức move())
##### 5. Xe tăng bắn được đạn
* Tạo lớp Bullet trong file bullet.js
* Lớp Bullet có các thuộc tính và phương thức gần tương tự như lớp Tank:
    * x: Toạ độ ngang
    * y: Toạ độ dọc
    * board: GameBoard mà dùng để hiển thị viên đạn
    * direction: Hướng di chuyển của viên đạn
    * render(): Hiển thị viên đạn lên trên Canvas của GameBoard
    * moveUp(), moveRight(), moveDown(), moveLeft() để di chuyển theo các hướng. Lưu ý, khác với xe tăng chỉ di chuyển khi được nhấn phím, các viên đạn sẽ tự di chuyển, do đó trong các phương thức move này thì sẽ sử dụng setTimeout() để tự gọi lại chính các phương thức đó. Việc di chuyển chỉ dừng lại khi toạ độ của viên đạn vượt ra ngoài phạm vi của GameBoard
    * move(): tuỳ theo thuộc tính direction của viên đạn mà gọi đến phương thức di chuyển tương ứng
* Trong lớp GameBoard:
    * Bổ sung thuộc tính bullets là một mảng sau này sẽ chứa các viên đạn
    * Phương thức addBullet(bullet) để thêm một viên đạn vào trong mảng bullets
    * Phương thức removeBullet(bullet) để xoá một viên đạn ra khỏi mảng bullets (Sau này, phương thức này sẽ được gọi khi mà một viên đạn đi ra khỏi biên của GameBoard)
    * Cập nhật phương thức render(), duyệt qua mảng bullets và gọi đến phương thức render() của từng viên đạn
* Trong lớp Tank:
    * Thêm phương thức fire() để bắn một viên đạn:
        * Tạo một đối tượng Bullet mới
        * Hướng của viên đạn sẽ trùng với hướng của xe tăng
        * Toạ độ của viên đạn được tính toán trùng với toạ độ nòng súng của xe tăng
        * Thêm viên đạn vừa tạo vào trong mảng bullets của GameBoard (bằng cách gọi đến phương thức addBullet(bullet))
* Trong lớp Bullet:
    * Cập nhật các phương thức moveUp(), moveRight(), moveDown(), moveLeft() để gọi đến phương thức removeBullet(bullet) của GameBoard trong trường hợp viên đạn đi ra ngoài phạm vi của GameBoard
* Trong lớp GameBoard:
    * Cập nhật phương thức action(), thêm xử lý cho trường hợp phím Space (keyCode là 32): Gọi đến phương thức fire() của lớp Tank
##### 6. Nâng cao
* Bổ sung thêm các xe tăng địch
    * Xuất hiện ngẫu nhiên
    * Di chuyển ngẫu nhiên
* Bổ sung tính năng va chạm:
    * Va chạm giữa các xe tăng
    * Va chạm giữa đạn và xe tăng
