<template>
    <div class="ContactUs">
			<form id="form" @submit="checkForm" action="#" method="post" novalidate="true">
                    <h1>Напишите нам - чтобы мы позвонили!</h1>
                    <p v-if="errors.length">
                    <b>Пожалуйста исправьте указанные ошибки:</b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                    </p>
                    <p>
                        <label for="name"></label>
                        <input id="name" v-model="name" type="text" name="name" placeholder="Ваше имя">
                    </p>
                    <p>
                        <label for="phone"></label>
                        <input id="phone" v-model="phone" type="tel" name="phone"  placeholder="Мобильный номер">
                    </p>
                    <p>
                        <textarea name="message" id="message" cols="30" rows="10" maxlength="250">

                        </textarea>
                    </p>
                    <p>
                        <input type="submit" value="Отправить">
                    </p>
            </form>
    </div>
</template>

<script>
export default {
    name: 'ContactUs',
    data(){
        return{
            errors: [],
            name: null,
            phone: null,
            message: null
        }
    },
    methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push('Укажите имя.');
      } else if (this.name.length < 3){ this.errors.push('Укажите корректное имя более чем из 3 букв.') }
      if (!this.phone) {
        this.errors.push('Укажите мобильный номер.');
      } 
    //   else if (!this.validPhone(this.phone)) {
    //     this.errors.push('Укажите корректный мобильный номер.');
    //   }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    // validPhone: function (phone) {
    //   var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    //   return re.test(phone);
    // }
  }
}
</script>


<style scoped>
    .ContactUs{
        /* width: 100%; */
        padding: 40px 50px;
        text-align: center;
        background-image: url(../assets/Adam__Suaerez.jpg);
        color: #919097; 
    }
    form{
        width: 100%;
    }
    input{
        width: 45%;
        height: 30px;
        text-align: center;
        color: #28282A;
    }
    textarea{
        width: 45%;
        color: #28282A;
    }
    .ContactUs form ul, .ContactUs form li {
      display: block; }
</style>