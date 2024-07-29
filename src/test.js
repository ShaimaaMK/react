const Tstt = () => {
    return (
        <div class="p-6">
            <h1 class="text-xl font-bold mb-4">Custom Radio Input with Tailwind CSS</h1>
            <form>
                <div class="flex flex-col space-y-2">
                    <div class="flex items-center cursor-pointer" onclick="selectRadio('color', 'red')">
                        <div id="radio-red" class="custom-radio"></div>
                        <span>Red</span>
                    </div>
                    <div class="flex items-center cursor-pointer" onclick="selectRadio('color', 'green')">
                        <div id="radio-green" class="custom-radio"></div>
                        <span>Green</span>
                    </div>
                    <div class="flex items-center cursor-pointer" onclick="selectRadio('color', 'blue')">
                        <div id="radio-blue" class="custom-radio"></div>
                        <span>Blue</span>
                    </div>
                    <div class="flex items-center cursor-pointer" onclick="selectRadio('color', 'yellow')">
                        <div id="radio-yellow" class="custom-radio"></div>
                        <span>Yellow</span>
                    </div>
                </div>
                {/* <input type="hidden" id="selected-color" name="color" value="">
                <input type="submit" value="Submit" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"> */}
            </form>
        </div>

      );
}
 
export default Tstt;