export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="relative w-[90%] flex items-center justify-between px-6 py-6 mt-40 backdrop-blur-md  rounded-xl mx-auto border-2 border-gray-200  ">
                <p className=" text-2xl text-black font-semibold  mx-auto">
                    20% off on next 3 Days
                </p>

            </div>
            {children}
        </div>
    )

}