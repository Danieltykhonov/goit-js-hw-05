'use strict';


const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName){
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime = hours + this.playTime;
    
  },

  getInfo(){
    return `${this.username} has ${this.playTime} active hours!`
  },
};





console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"



// Залиш цей код для перевірки ментором.



// Вимоги

// Значення змінної profile — це об'єкт з властивостями username, playTime, getInfo, changeUsername і updatePlayTime.
// Значення властивостей getInfo, changeUsername і updatePlayTime — функції.
// Для звертання до властивостей об'єкта в його методах використано this.
// Виклик profile.getInfo() до змін повертає "Jacob has 300 active hours!".
// Виклик profile.changeUsername("Marco") змінює username на "Marco", після чого profile.getInfo() повертає "Marco has 300 active hours!".
// Виклик profile.updatePlayTime(20) збільшує playTime на 20, після чого profile.getInfo() повертає "Marco has 320 active hours!".
// Результати всіх викликів console.log виведено в консоль.
