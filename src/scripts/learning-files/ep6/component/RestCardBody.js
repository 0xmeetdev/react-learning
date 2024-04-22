import RestroCard from "../../ep5/component/RestroCard";
import Shimmer from "./Shimmer";

export default RestCardBody = ({ restroData }) => {

    /**
     * This condition will check if the data is available or not
     * It's called as conditional rendering 
     */
    return restroData.length === 0 ? <Shimmer /> : (
        <div>
            <h2>Restaurants with online food delivery</h2>

            <div className='res-container'>
                {restroData.map(restaurant => <RestroCard data={restaurant} key={restaurant.info.id} />)}
            </div>

        </div>

    );
}