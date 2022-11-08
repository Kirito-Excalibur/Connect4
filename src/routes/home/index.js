import Slots from "../../components/Slots";


const Home = () => {

	const divs = n => {
		let els = []
		for (let i = 0; i < n; i++) {
		  els.push(<Slots num={i}/>)
		}
		return els
	  }


	return (
	<div className="w-[1920px]">

		<div className="flex justify-center gap-[300px] mt-[2rem]">
			<button>MENU</button>
			<button>ICON</button>
			<a href="/">Reload</a>
			<button>RESTART</button>
		</div>



		<div className="flex justify-between mx-[100px] items-center mt-[3rem] z-20 relative rounded-3xl" id="stage">
			<div className="w-[200px] h-[200px] bg-white rounded-3xl flex justify-center items-center flex-col text-3xl"> <p>Player 1</p> <p>26</p> </div>
			<div className="w-[1200px] p-5  bg-white rounded-3xl flex flex-wrap gap-y-[3rem] gap-x-[4rem] justify-center">
				
				{divs(35)}

			</div>
			<div className="w-[200px] h-[200px] bg-white rounded-3xl flex justify-center items-center flex-col text-3xl"><p>Player 2</p> <p>26</p></div>
		</div>

		<div className="absolute bottom-0 w-[1920px] flex justify-center z-10" id="lower_design">
			<div className="h-[200px] w-[1920px]  bg-[#481692] flex items-center justify-center rounded-tl-[4rem] rounded-tr-[4rem]">

			</div>
		</div>



	</div>
	)
};

export default Home;
