function Bullet(x, y, direction, board) {
    var self = this;
    self.x = x;
    self.y = y;
    self.direction = direction;
    self.board = board;
    self.speed = 20;

    self.render = function () {
        var context = self.board.getCanvas().getContext('2d');
        context.beginPath();
        context.arc(self.getX(), self.getY(), BULLET_RADIUS, 0, Math.PI * 2);
        context.fillStyle = 'red';
        context.fill();
        context.closePath();
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
    };

    self.moveRight = function () {
        if(self.x <= self.board.getWidth() - self.speed - BULLET_RADIUS){
            self.x += self.speed;
            self.board.render();
            setTimeout(self.moveRight, 50);
        } else {
            self.board.removeBullet(self);
            self.board.render();
            self = null;
        }
    };

    self.moveLeft = function () {
        if(self.x >= self.speed) {
            self.x -= self.speed;
            self.board.render();
            setTimeout(self.moveLeft, 50);
        } else {
            self.board.removeBullet(self);
            self.board.render();
            self = null;
        }
    };

    self.moveDown = function () {
        if(self.y <= self.board.getHeight() - self.speed - BULLET_RADIUS){
            self.y += self.speed;
            self.board.render();
            setTimeout(self.moveDown, 50);
        } else {
            self.board.removeBullet(self);
            self.board.render();
            self = null;
        }
    };

    self.moveUp = function () {
        if(self.y >= self.speed){
            self.y -= self.speed;
            self.board.render();
            setTimeout(self.moveUp, 50);
        } else {
            self.board.removeBullet(self);
            self.board.render();
            self = null;
        }

    };

    self.getX = function () {
        return self.x;
    };

    self.getY = function () {
        return self.y;
    };

    self.getSpeed = function () {
        return self.speed;
    };

    self.getDirection = function () {
        return self.direction;
    }
}