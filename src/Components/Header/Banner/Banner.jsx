

const Banner = () => {
    return (
        <div className="h-[70vh] bg-cover rounded my-10 bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2NBwfDCkiqEsYvwH7XU4DncCodQZZ34f3ILeWty0nbKGW4r4MPa7atIfU')]">
            <div className="w-full h-full  flex justify-center items-center   flex-col bg-white/80">
                <h1 className="font-bold text-4xl">I Grow By Helping People In Need</h1>
                <div className="flex justify-center my-5">
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn bg-[#FF444A] hover:bg-[#FF444A] text-white">
                            Search
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;