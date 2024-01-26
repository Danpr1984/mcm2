import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import Library from "./Library";
import SongListCard from "./SongListCard.jsx";

const Dashboard = () => {
  const { spotifyToken } = useContext(AuthContext);

  return <Library token={spotifyToken} />;
};

export default Dashboard;

// <section className="flex h-[calc(100vh-64px)] w-full flex-col items-center justify-center">
//   <div class="w-full bg-red-100">
//     <div class="mx-auto flex  w-8/12 overflow-hidden rounded-lg bg-white shadow-md">
//       <div class="flex w-full flex-col">
//         <div class="flex border-b p-5">
//           <img
//             class="h-20 w-20 object-cover"
//             alt="User avatar"
//             src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
//           />
//           <div class="flex w-full flex-col px-2">
//             <span class="text-xs font-medium uppercase text-gray-700 ">
//               now playing
//             </span>
//             <span class="pt-1 text-sm font-semibold capitalize text-red-500">
//               I think I need a sunrise, I'm tired of the sunset
//             </span>
//             <span class="text-xs font-medium uppercase text-gray-500 ">
//               -"Boston," Augustana
//             </span>
//             <div class="flex justify-end">
//               <img
//                 class="w-5 cursor-pointer"
//                 src="https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png"
//               />
//               <img
//                 class="mx-2 w-5 cursor-pointer"
//                 src="https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png"
//               />
//               <img
//                 class="w-5 cursor-pointer"
//                 src="https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png"
//               />
//             </div>
//           </div>
//         </div>

//         <div class="flex flex-col items-center p-5 sm:flex-row">
//           <div class="flex items-center">
//             <div class="flex space-x-3 p-2">
//               <button class="focus:outline-none">
//                 <svg
//                   class="h-4 w-4"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="#ef4444"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <polygon points="19 20 9 12 19 4 19 20"></polygon>
//                   <line x1="5" y1="19" x2="5" y2="5"></line>
//                 </svg>
//               </button>
//               <button class="flex h-10 w-10 items-center justify-center rounded-full pl-0.5 ring-1 ring-red-400 focus:outline-none">
//                 <svg
//                   class="h-5 w-5"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="#ef4444"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <polygon points="5 3 19 12 5 21 5 3"></polygon>
//                 </svg>
//               </button>
//               <button class="focus:outline-none">
//                 <svg
//                   class="h-4 w-4"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="#ef4444"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <polygon points="5 4 15 12 5 20 5 4"></polygon>
//                   <line x1="19" y1="5" x2="19" y2="19"></line>
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div class="relative ml-2 w-full sm:w-1/2 md:w-7/12 lg:w-4/6">
//             <div class="h-2 w-full rounded-lg bg-red-300"></div>
//             <div class="absolute top-0 h-2 w-1/2 rounded-lg bg-red-500"></div>
//           </div>
//           <div class="flex w-full justify-end pt-1 sm:w-auto sm:pt-0">
//             <span class="pl-2 text-xs font-medium uppercase text-gray-700">
//               02:00/04:00
//             </span>
//           </div>
//         </div>

//         <div class="flex flex-col p-5">
//           <div class="mb-2 flex items-center justify-between border-b pb-1">
//             <span class=" text-base font-semibold uppercase text-gray-700">
//               {" "}
//               play list
//             </span>
//             <img
//               class="w-4 cursor-pointer"
//               src="https://p.kindpng.com/picc/s/152-1529312_filter-ios-filter-icon-png-transparent-png.png"
//             />
//           </div>

//           <SongListCard />
//           <SongListCard />
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
