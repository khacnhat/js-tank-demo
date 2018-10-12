function GameBoard(canvas) {
    var self = this;
    self.canvas = canvas;
    self.tank = new Tank(50 ,50, 'green', DIRECTION_DOWN, self);
    self.bullets = [];
    self.oponents = [
        new Tank(200, 200, 'yellow', DIRECTION_DOWN, self),
        new Tank(100, 300, 'yellow', DIRECTION_UP, self)
    ];

    self.render = function () {
        var context = self.canvas.getContext('2d');
        context.clearRect(0, 0, self.canvas.width, self.canvas.height);
        self.tank.render();
        self.bullets.forEach(function (bullet) {
            bullet.render();
        });
        self.oponents.forEach(function (t) {
            t.render();
        });
    };

    self.action = function (code) {
        switch (code){
            case 37:
                self.tank.setDirection(DIRECTION_LEFT);
                self.tank.move();
                break;
            case 39:
                self.tank.setDirection(DIRECTION_RIGHT);
                self.tank.move();
                break;
            case 38:
                self.tank.setDirection(DIRECTION_UP);
                self.tank.move();
                break;
            case 40:
                self.tank.setDirection(DIRECTION_DOWN);
                self.tank.move();
                break;
            case 32:
                self.tank.fire();
        }
    };

    self.getWidth = function () {
        return self.canvas.width;
    };

    self.getHeight = function () {
        return self.canvas.height;
    };

    self.getCanvas = function () {
        return self.canvas;
    };

    self.addBullet = function (bullet) {
        self.bullets.push(bullet);
    };

    self.removeBullet = function (bullet) {
        var index = -1;
        for(var i = 0; i < self.bullets.length; i++){
            if(self.bullets[i] === bullet){
                index = i;
                break;
            }
        }
        if (index !== -1){
            self.bullets.splice(index, 1);
        }
    }
}