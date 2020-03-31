var slideshow = {
    photoList: ['dogPic', 'catPic', 'fishPic', 'ratPic'],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        if (this.currentPhotoIndex <= this.photoList.length) {
            console.log(this.currentPhotoIndex+1);
        } else {
            console.log("End of Slideshow")
        }
    },
    prevPhoto: function() {
        if (this.currentPhotoIndex >= this.photoList.length) {
            console.log(this.currentPhotoIndex-1);
        } else {
            console.log("End of slideshow")
        }
    },
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
    }
}
console.log(slideshow.getCurrentPhoto());