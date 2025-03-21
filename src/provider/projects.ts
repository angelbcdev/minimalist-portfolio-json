export type TRepositorio = {
  detail: TDetail[];
  title: string;
  img: string[];
  code: TCode[];
  about: string;
  repoLink: string;
  pageLink: string;
  características?: string[];
  figmaLink?: string;
  role?: string;
};
export interface TRepositorioWithId extends TRepositorio {
  id: number;
}
interface TRepositorioAport extends TRepositorio {
  role: string;
}
type TDetail =
  | "Web Page."
  | "Web App."
  | "App Movil."
  | "Api Rest."
  | "Video Game."
  | "Desktop App."
  | "EStore."
  | "Chat Service.";

type TCode =
  | "HTML"
  | "JavaScript"
  | "CSS"
  | "TypeScrip"
  | "React"
  | "MySQL"
  | "React native"
  | "nextJs"
  | "tailwindcss"
  | "Astro"
  | "Electron"
  | "Swift"
  | "Sockets.io";

const data: TRepositorioWithId[] = [];

const createNewRepo = (repo: TRepositorio) => {
  data.push({
    ...repo,
    id: data.length + 1,
  });
};

createNewRepo({
  title: "Anime Page",
  detail: ["Web Page."],
  img: [
    "https://pbs.twimg.com/media/GmgHSa9WcAAEVIN?format=jpg&name=large",
    "https://pbs.twimg.com/media/GmgJvQiaEAAT72A?format=jpg&name=large",
    "https://pbs.twimg.com/media/GmgJvQgaEAI3qEP?format=jpg&name=large",
    "https://pbs.twimg.com/media/GmgJvQgaQAAWuHf?format=jpg&name=large",
  ],
  about:
    "Page recreate with design from existing page for the moment is only the skeleton of different part",
  code: ["React", "tailwindcss"],
  características: [
    "Browse a vast collection of anime series and movies/",
    "User-friendly and responsive design.",
    "Intuitive search functionality.",
    "Episode listing for each anime.",
    "Smooth and fast performance with React",
  ],
  repoLink: "https://github.com/angelbcdev/anime_page",
  pageLink: "https://anime-view.netlify.app/",
});

createNewRepo({
  title: "Airbnb Clone Project",
  detail: ["App Movil."],
  img: [
    "https://pbs.twimg.com/media/GKRIhF0WwAAgJVM?format=jpg&name=medium",
    "https://pbs.twimg.com/media/GKRJjUeWUAAmMCr?format=jpg&name=small",
  ],
  about:
    "This project aims to recreate the functionality and user experience of the Airbnb platform for iOS devices using SwiftUI and Swift. While the project is currently in development and only runs with test data, it provides a comprehensive user journey. Users can explore various locations, view property details, and add favorites. ",
  code: ["Swift"],
  características: [
    "Location Exploration",
    "Property Details",
    "Favorite Properties",
  ],
  repoLink: "https://github.com/angelbcdev/clone_airbnb_app",
  pageLink: "",
});

createNewRepo({
  role: "Collaborate as Front-end for the landing page and the animals by ecosystems area.",
  title: "Animal Preservacion",
  detail: ["Web Page."],
  img: [
    "https://pbs.twimg.com/media/GDSRV0pXcAAcM4r?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GDSRV0sXkAACrpY?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GDSRV0rW0AEP-LP?format=jpg&name=large",
    "https://pbs.twimg.com/media/GDSRV0pXwAAuIbs?format=jpg&name=large",
    "https://pbs.twimg.com/media/GDSRaPBXcAAo0ZI?format=jpg&name=large",
    "https://pbs.twimg.com/media/GDSRaPXXUAApIz_?format=jpg&name=large",
    "https://pbs.twimg.com/media/GDSRaPlXkAAUbk7?format=jpg&name=large",
  ],
  about:
    "Discover a unique way to contribute to the preservation of wildlife in Latin America with Animal Preservation, an initiative that goes beyond traditional conservation. We are proud to present an innovative project that combines a passion for wildlife with tangible opportunities to make a difference.",
  code: ["nextJs", "tailwindcss"],
  características: ["Merchandising Exclusivo.", "Direct Donations."],
  repoLink: "https://github.com/angelbcdev/reserva_animal",
  pageLink: "https://reserva-animal.vercel.app",
  figmaLink:
    "https://www.figma.com/file/u0zUDwyfM5xFLVzLqtyrlr/No-Country?node-id=1%3A2&mode=dev",
});

createNewRepo({
  title: "Game Stream",
  detail: ["App Movil."],
  img: [
    "https://pbs.twimg.com/media/GKRKa3NXAAAZZ1-?format=jpg&name=medium",
    "https://pbs.twimg.com/media/GKRKa3PXkAAYpXW?format=jpg&name=medium",
  ],
  about:
    "This iOS application was created with Swift and SwiftUI with the purpose of consuming an API from a video game catalog. It allows users to explore the latest games, view images and trailers of the games, as well as detailed information about each game.",
  code: ["Swift", "MySQL"],
  características: ["API consumption", "Game Exploration", "Viewing Details"],
  repoLink: "https://github.com/angelbcdev/game_storeIO",
  pageLink: "",
});

createNewRepo({
  detail: ["Web App.", "Desktop App."],
  title: "Print Web/Desktop",
  img: [
    "https://pbs.twimg.com/media/GHoFhlxXgAATdxY?format=jpg&name=large",
    "https://pbs.twimg.com/media/GHoFhlxXMAAmYWN?format=jpg&name=large",
    "https://pbs.twimg.com/media/GHoFhlvWEAA-B_4?format=jpg&name=large",
    "https://pbs.twimg.com/media/GHoFYjBWEAA1zIz?format=jpg&name=large",
    "https://pbs.twimg.com/media/GHoFYjDWcAAdebr?format=jpg&name=large",
    "https://pbs.twimg.com/media/GHoFhlxWAAEsCw_?format=jpg&name=large",
  ],
  about:
    "PrintCheque is an application designed to print checks in a personalized way, allowing users to move each of the fields according to their needs. Additionally, it offers the ability to save data to a MySQL database for reliable data persistence.",
  code: ["TypeScrip", "React", "Electron", "tailwindcss", "MySQL"],
  características: [
    "Field customization",
    "Data persistence",
    "Browser and desktop support",
    "Authentication and authorization",
    "Specific tasks for each role",
    "Export to Excel",
  ],
  repoLink: "https://github.com/angelbcdev/chekPrintApp",
  pageLink: "https://charming-sprinkles-e4f024.netlify.app/",
});

createNewRepo({
  detail: ["App Movil."],
  title: "PostAPP",
  img: [
    "https://pbs.twimg.com/media/GGLytj-XcAA7eCB?format=jpg&name=large",
    "https://camo.githubusercontent.com/b79b93b150e649e3bf79efbc6c8362097a02ff07cf5da44997da2a3bafff1b23/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47474c79746a3858674145417565723f666f726d61743d6a7067266e616d653d6c61726765",
    "https://camo.githubusercontent.com/b79b93b150e649e3bf79efbc6c8362097a02ff07cf5da44997da2a3bafff1b23/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47474c79746a3858674145417565723f666f726d61743d6a7067266e616d653d6c61726765",
    "https://camo.githubusercontent.com/df83c543298d6eff841835b16cf596b6004bd7537babc07aa187f6ee1a4672ef/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47474c79746a38586f414155724f433f666f726d61743d6a7067266e616d653d6c61726765",
    "https://camo.githubusercontent.com/3d014ec2c68087707f7edb3fe903045a47b30bceeb21ac0610bf46be0628dded/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47474c79746a2d5741414142464b723f666f726d61743d6a7067266e616d653d6c61726765",
  ],
  about:
    "MakePost es una aplicación nativa para iOS desarrollada en Swift con el uso de Storyboards. La aplicación permite a los usuarios registrarse, autenticarse, crear, editar y eliminar publicaciones, así como ver publicaciones de otros usuarios en un mapa.",
  code: ["Swift", "TypeScrip", "MySQL"],
  características: [
    "Registro de usuarios",
    "Autenticación",
    "Creación de publicaciones",
    "Edición de publicaciones",
    "Eliminación de publicaciones",
  ],
  repoLink: "https://github.com/54albert54/PostMakerIOS/",
  pageLink: "",
});

createNewRepo({
  title: "Pokedex App",
  detail: ["App Movil."],
  img: ["https://pbs.twimg.com/media/GKRL-r4WEAApnXa?format=jpg&name=medium"],
  about:
    "Welcome to the Pokedex App! This app was built with React Native and TypeScript, leveraging a PostgreSQL database to provide detailed information about Pokémon. Discover new species, their abilities and more.",
  code: ["React", "React native", "MySQL"],
  repoLink: "https://github.com/angelbcdev/PokeNative",
  pageLink: ``,
});

createNewRepo({
  title: "MemoryQuiz",
  detail: ["Video Game."],
  img: [
    "https://camo.githubusercontent.com/13c9519d996f460fc639e626862f92e31c7c2b68ae2b38a53a649e5d5dd07ce0/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47444850663152576b4141456952323f666f726d61743d6a7067266e616d653d6c61726765",
    "https://camo.githubusercontent.com/77e75da242b5db838ee91f69f5113112c5e042315eb11f305316a9524499f563/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47444850684b7257774141797249693f666f726d61743d6a7067266e616d653d6c61726765",
    "https://camo.githubusercontent.com/78643685b4cf2e56eda55e4845960e363a5d445e13c895acf3caec7fc68177ac/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f474448506b31535730414134656f593f666f726d61743d6a7067266e616d653d6c61726765",
  ],
  about:
    "Welcome to the Memory Game! This game has been created using only HTML, CSS, and pure JavaScript. It is an exercise designed to improve your skills in HTML layout, CSS styling, and programming logic with complex algorithms.",
  code: ["HTML", "CSS", "JavaScript"],
  características: [
    "Functional Memory game with 3 difficulty levels.",
    "Random letter selection in each game.",
  ],
  repoLink: "https://github.com/54albert54/memoryQuiz",
  pageLink: `https://memoryquiz.onrender.com`,
});

createNewRepo({
  title: "Friday Night Rhythm-CLONE",
  detail: ["Video Game."],
  img: [
    "https://camo.githubusercontent.com/5cf14a500abefd81fd1dda79d751733c0537afdbf5ad7744772ce0970b582c0e/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47444872357474574941414f7942443f666f726d61743d6a7067266e616d653d6c61726765",
    "https://camo.githubusercontent.com/8ec7cf2eb1a86349eab1355041aa7e9846cf1c693b9d001406e4f5a633a6d1e4/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47444872357477585941416b72374d3f666f726d61743d6a7067266e616d653d6c61726765",
  ],
  about:
    'Welcome to "Friday Night Rhythm"! This is a simple and functional rhythm game created exclusively with HTML, CSS and JavaScript. The game challenges you to keep up the pace and set time records while having fun.',
  code: ["JavaScript", "HTML", "CSS"],
  características: ["Simple Rhythm Game.", "Time Options.", "Saved Records."],
  repoLink: "https://github.com/angelbcdev/friday-night-clone",
  pageLink: "https://angelbcdev.github.io/friday-night-clone/",
});

createNewRepo({
  title: "Angel's Family Daycare",
  detail: ["Web Page."],
  img: [
    "https://camo.githubusercontent.com/add2325deac71c8ff9bfb0be950f2061d39103cada0fa5c3ef6da5253d104f3f/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f4744526e70516457554141344476353f666f726d61743d6a7067266e616d653d6d656469756d",
    "https://camo.githubusercontent.com/854d70d9686786d874802805d6339b2df9d9295c85056623c86e03f86d8fedec/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f4744526e41456c584d4141746b51583f666f726d61743d6a7067266e616d653d6d656469756d",
    "https://camo.githubusercontent.com/f1beb8600c7d177ba2f1a5b65a5d91b9ec4bc8bb740e6e3f114c9351e74e3a53/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f4744526e41456d58674141794844313f666f726d61743d6a7067266e616d653d6d656469756d",
  ],
  about:
    "Welcome to the landing page for Angel's Family Daycare, a project designed to provide information about our childcare services. This landing page has been developed using Astro and Tailwind CSS to ensure fast performance and a responsive experience.",
  code: ["JavaScript", "HTML", "CSS"],
  características: [""],
  repoLink: "https://github.com/angelbcdev/landinDaycare",
  pageLink: "https://angel-daycare.netlify.app/",
});

createNewRepo({
  title: "TodoList App",
  detail: ["Web App."],
  img: [
    "https://camo.githubusercontent.com/5403c0eed212899fde0d724edd9fa288c03ecebbe60f2fcbfd6e683235690b2a/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f4744475a77726b58634141467642673f666f726d61743d6a7067266e616d653d6c61726765",
  ],
  about:
    "This simple web application allows you to manage your daily tasks with ease. You can create new ALL, edit them and navigate through them efficiently thanks to the pagination functionality.",
  code: ["nextJs", "tailwindcss"],
  características: ["Creation of TODO.", "Edit of TODO."],
  repoLink: "https://github.com/angelbcdev/todoList",
  pageLink: "https://todo-list-2-phi.vercel.app",
});

const allRepo = data.sort((a, b) => a.id - b.id);

export { allRepo };
