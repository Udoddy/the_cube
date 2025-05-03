// // First, create a component to fetch and display Google Maps ratings
// const GoogleMapsRating = () => {
//     const [rating, setRating] = useState<{average: number | null, count: number | null}>({average: null, count: null});
//
//     useEffect(() => {
//         // This would typically come from your backend API
//         // For demo purposes, we'll use hardcoded values from your Maps link
//         setRating({
//             average: 4.8,  // Replace with your actual current rating
//             count: 200      // Replace with your actual review count
//         });
//
//         // In production, you would fetch this from Google's API or your backend:
//         // fetch('/api/google-maps-ratings')
//         //   .then(res => res.json())
//         //   .then(data => setRating(data));
//     }, []);
//
//     return (
//         <div className="flex items-center gap-3 text-sm">
//             <Star size={20} className="text-primary-500 fill-current" />
//             <div>
//                 <p className="font-medium">Ratings</p>
//                 {rating.average ? (
//                     <p className="text-gray-600">
//                         {rating.average.toFixed(1)}/5 from {rating.count}+ reviews
//                     </p>
//                 ) : (
//                     <p className="text-gray-600">Loading ratings...</p>
//                 )}
//             </div>
//         </div>
//     );
// };