function App() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div class="w-[90%] bg-white border border-gray-200 rounded-lg shadow">
          <div class="px-4 py-5">
            <div className="flex justify-between items-center">
              <div className="px-10 py-4">Hello Travels</div>
              <div className="px-10 py-4">
                <p className="font-bold">Contact</p> <p>imran dola</p>
              </div>
              <div className="px-10 py-4">
                <p className="font-bold">City</p> <p>Surat</p>
              </div>
              <div className="px-10 py-4">
                <p className="font-bold">State</p> <p>Gujarat</p>
              </div>
              <button className="bg-red-500 text-white rounded-full px-8 py-2">
                Button
              </button>
            </div>
            <div className="mt-10">
              <div className="px-16">
                <div>
                  <p className="font-bold">Description</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem at quod eum, pariatur omnis voluptates molestiae?
                    Nostrum facere id enim, quibusdam asperiores voluptatum
                    neque veritatis exercitationem consequuntur unde explicabo
                    cum distinctio possimus dignissimos ipsam! Aliquam debitis
                    modi a repellendus. Eligendi quibusdam minus obcaecati harum
                    voluptate dicta assumenda consequuntur ullam molestiae.
                  </p>
                </div>
                <div className="flex w-full mt-6">
                  <div className="flex flex-col space-y-2 mr-[40%]">
                    <div>
                      <p className="font-bold">Contact person</p>
                      <p>imran dola</p>
                    </div>
                    <div>
                      <p className="font-bold">Designation</p>
                      <p>something i cant read</p>
                    </div>
                    <div>
                      <p className="font-bold">Emails</p>
                      <p>sample@gmail.com</p>
                    </div>
                    <div>
                      <p className="font-bold">Phones</p> <p>123456789</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div>
                      <p className="font-bold">Address</p>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Impedit eveniet hic tempora reprehenderit, culpa
                        incidunt.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold">City</p> <p>Surat</p>
                    </div>
                    <div>
                      <p className="font-bold">State</p> <p>Gujarat</p>
                    </div>
                    <div>
                      <p className="font-bold">Country</p> <p>India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
