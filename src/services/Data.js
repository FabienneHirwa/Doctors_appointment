

const data = [
	{
		profilePicture: "assets/pictures/saschafirtina.jpg",
		username: "Dr Sarah ",
		name: "Sarah Abelson",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        specialty:"Dentist",
        telephone:780577060,
		email: "sarahabelson@gmail.com"
	},
	{
		profilePicture: "assets/pictures/marin.ivankovic.jpg",
		username: "Dr Christina ",
		name: "Christina Allen",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Dermatorgist",
        telephone:780577061,
		email: "christinaallen@gmail.com"
	},
	{
		profilePicture: "assets/pictures/bluemaex.jpg",
		username: "Dr Hendrick ",
		name: "Hendrick Arnold",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Genecologist",
        telephone:780577062,
		email: "hendrickarnold@gmail.com"
	},
	{
		profilePicture: "assets/pictures/kanyewest.jpg",
		username: " Dr Karly",
		name: "Karly Byrd",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Optharmologist",
        telephone:780577063,
		email: "karlybyrd@gmail.com"
	},
	{
		profilePicture: "assets/pictures/jxhannamadeleine.jpg",
		username: "Dr Thomas",
		name: " Thomas Cacciola",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Dentist",
        telephone:780577064,
		email: "thomascacciola@gmail.com"
	},
	{
		profilePicture: "assets/pictures/beyonce.jpg",
		username: "Dr Steven ",
		name: "Steven Deserre",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Neurologist",
        telephone:780577065,
		email: "stevendeserre@gmail.com"
	},
	{
		profilePicture: "assets/pictures/nanonkaffeberlin.jpg",
		username: "Dr Robert",
		name: "Robert Donohue",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Neurologist",
        telephone:780577066,
		email: "robertdonohue@gmail.com"
	},
	{
		profilePicture: "assets/pictures/chapteronecoffeeberlin.jpg",
		username: "Dr Jonathan",
		name: "Jonathan Doré",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Dentist",
        telephone:780577067,
		email: "jonathandoré@gmail.com"
	},
	{
		profilePicture: "assets/pictures/saschafirtina.jpg",
		username: "Dr Nathaniel",
		name: "Nathaniel Doro",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Dermatologist",
        telephone:780577067,
		email: "nathanieldoro@gmail.com"
	},
	{
		profilePicture: "assets/pictures/marin.ivankovic.jpg",
		username: "Dr Eugene",
		name: "Eugene Hoffert",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Neurologist",
        telephone:780577068,
		email: "eugenehoffert@gmail.com"
	},
	{
		profilePicture: "assets/pictures/bluemaex.jpg",
		username: "Dr Christopher",
		name: "Christopher Doti",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Dentist",
        telephone:780577069,
		email: "christopherdoti@gmail.com"
	},
	{
		profilePicture: "assets/pictures/kanyewest.jpg",
		username: "Dr Camille",
		name: "Camille Dumas",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Neurologist",
        telephone:780577070,
		email: "camilledumas@gmail.com"
	},
	{
		profilePicture: "assets/pictures/jxhannamadeleine.jpg",
		username: "William",
		name: "Kanimba William",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Opthamologists",
        telephone:780577071,
		email: "kanimbawilliam@gmail.com"
	},
	{
		profilePicture: "assets/pictures/beyonce.jpg",
		username: "Dr Anna",
		name: "Anna Eardley",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Neurologist",
        telephone:780577072,
		email: "annaeardley@gmail.com"
	},
	{
		profilePicture: "assets/pictures/nanonkaffeberlin.jpg",
		username: "Dr John",
		name: "John Fantauzzi",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Dermatologist",
        telephone:780577073,
		email: "johnfantauzzi@gmail.com"
	},
	{
		profilePicture: "assets/pictures/chapteronecoffeeberlin.jpg",
		username: "Dr Allen",
		name: "Allen Herr",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Neurologist",
        telephone:780577077,
		email: "@gmail.com"
	},
	{
		profilePicture: "assets/pictures/saschafirtina.jpg",
		username: "Dr Michael",
		name: "Michael Greenblatt",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Dentist",
        telephone:780577078,
		email: "michaelgreenblatt@gmail.com"
	},
	{
		profilePicture: "assets/pictures/marin.ivankovic.jpg",
		username: "Dr Jennifer",
		name: "Jennifer Hale",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Neurologist",
        telephone:780577079,
		email: "jenniferhale@gmail.com"
	},
	{
		profilePicture: "assets/pictures/bluemaex.jpg",
		username: "Dr Deborah",
		name: "Deborah Hildreth",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Neurologist",
        telephone:780577080,
		email: "deborahhildreth@gmail.com"
	},
	{
		profilePicture: "assets/pictures/kanyewest.jpg",
		username: "Dr Laure ",
		name: "Lauren Hospedales",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis semper. Fusce maximus purus at leo consequat mattis. Maecenas vel tellus eget risus rhoncus porttitor varius id nisi. Aliquam consectetur, est non aliquam cursus, purus magna pharetra erat, finibus dignissim neque orci et dolor. Curabitur tincidunt purus est, sit amet tincidunt urna condimentum ut. Phasellus a dolor tempor risus ornare faucibus. Etiam gravida tortor enim, ut varius sapien sagittis eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		specialty:"Pediatrist",
        telephone:780577081,
		email: "laurenhospedales@gmail.com"
	},
	
];


export function getData() {
  return data;
}