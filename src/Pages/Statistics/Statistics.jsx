import Chart from "../../Components/Chart/Chart";


const Statistics = () => {
    return (
        <div className="flex justify-center my-10">
           <Chart></Chart> 
           <div>
            <p>Your Donation  <span className="mx- text-[#00C49F] rounded bg-[#00C49F]">......................</span></p>
            <p>Total Donation <span className=" text-[#f0644f] rounded bg-[#f0644f]">......................</span></p>
           </div>
        </div>
    );
};

export default Statistics;