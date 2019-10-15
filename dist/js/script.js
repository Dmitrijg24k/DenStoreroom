Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
	el: '#app',
	data: {
		items: ["Home",
		 	   "About Us" ,
		  	   "Contact Us" ,
		],
		show: true,
		isActive: false,
	},
	methods: {
    updateScroll() {
      if(window.scrollY > 1){
      	 this.isActive = true;
      	 //alert(isActive);
      } 
      else this.isActive = false;

      // this.scrollPosition = window.scrollY
    }
  },	
});


const form = new Vue({
  el: '#form',
  data: {
    errors: [],
    name: null,
    phone: null,
    message: null
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push('Укажите имя.');
      } else if (this.name.length < 3){ this.errors.push('Укажите корректное имя более чем из 3 букв.') }
      if (!this.phone) {
        this.errors.push('Укажите мобильный номер.');
      } else if (!this.validPhone(this.phone)) {
        this.errors.push('Укажите корректный мобильный номер.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validPhone: function (phone) {
      var re = /^\d[\d\(\)\ -]{4,14}\d$/;
      return re.test(phone);
    }
  }
});

// const form = new Vue({
//   el: '#form',
//   data: {
//     errors: [],
//     name: null,
//     email: null,
//     movie: null
//   },
//   methods: {
//     checkForm: function (e) {
//       this.errors = [];

//       if (!this.name) {
//         this.errors.push('Укажите имя.');
//       }
//       if (!this.email) {
//         this.errors.push('Укажите электронную почту.');
//       } else if (!this.validEmail(this.email)) {
//         this.errors.push('Укажите корректный адрес электронной почты.');
//       }

//       if (!this.errors.length) {
//         return true;
//       }

//       e.preventDefault();
//     },
//     validEmail: function (email) {
//       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       return re.test(email);
//     }
//   }
// })