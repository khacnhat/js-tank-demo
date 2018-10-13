function Tank(x, y, color, direction, board) {
    var self = this;
    self.x = x;
    self.y = y;
    self.color = color;
    self.direction = direction;
    self.board = board;
    self.speed = 10;

    self.render = function () {
        var context = self.board.getCanvas().getContext('2d');
        context.fillStyle = self.color;
        context.fillRect(self.x, self.y, TANK_WIDTH, TANK_HEIGHT);
        self.renderBarrel(context);
    };

    self.renderBarrel = function (context) {
        context.fillStyle = self.color;
        switch (self.direction){
            case DIRECTION_DOWN:
                context.fillRect(self.x + TANK_WIDTH / 2 - BARREL_WIDTH/2, self.y + TANK_HEIGHT, BARREL_WIDTH, BARREL_WIDTH);
                break;
            case DIRECTION_UP:
                context.fillRect(self.x + TANK_WIDTH / 2 - BARREL_WIDTH/2, self.y - BARREL_WIDTH, BARREL_WIDTH, BARREL_WIDTH);
                break;
            case DIRECTION_LEFT:
                context.fillRect(self.x - BARREL_WIDTH, self.y + TANK_HEIGHT / 2 - BARREL_WIDTH/2, BARREL_WIDTH, BARREL_WIDTH);
                break;
            case DIRECTION_RIGHT:
                context.fillRect(self.x + TANK_WIDTH, self.y + TANK_HEIGHT / 2 - BARREL_WIDTH/2, BARREL_WIDTH, BARREL_WIDTH);
                break;
        }
    };

    self.setDirection = function (direction) {
        self.direction = direction;
    };

    self.move = function () {
        switch (self.direction){
            case DIRECTION_UP:
                self.moveUp();
                break;
            case DIRECTION_DOWN:
                self.moveDown();
                break;
            case DIRECTION_RIGHT:
                self.moveRight();
                break;
            case DIRECTION_LEFT:
                self.moveLeft();
                break;
        }
        self.board.render();
    };

    self.moveRight = function () {
        if(self.x <= self.board.getWidth() - self.speed - TANK_WIDTH - BARREL_WIDTH){
            self.x += self.speed;
        }
    };

    self.moveLeft = function () {
        if(self.x >= self.speed + BARREL_WIDTH) {
            self.x -= self.speed;
        }
    };

    self.moveDown = function () {
        if(self.y <= self.board.getHeight() - self.speed - TANK_HEIGHT - BARREL_WIDTH){
            self.y += self.speed;
        }
    };

    self.moveUp = function () {
        if(self.y >= self.speed + BARREL_WIDTH){
            self.y -= self.speed;
        }
    };

    self.fire = function () {
        var bullet = new Bullet(self.x + TANK_WIDTH/2, self.y + TANK_HEIGHT/2, self.direction, self.board);
        self.board.addBullet(bullet);
        bullet.move();
    };

    self.getX = function () {
        return self.x;
    };

    self.getY = function () {
        return self.y;
    };
}