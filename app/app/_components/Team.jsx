import React from 'react'

const Team = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Team Member 1 */}
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full h-48 object-cover" src="https://source.unsplash.com/100x100/?person" alt="Team Member 1" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-indigo-600">John Doe</div>
      <p className="text-gray-700 text-base">Front-End Developer</p>
      <p className="text-gray-600 text-sm">Creating user-friendly interfaces that engage and delight users.</p>
    </div>
  </div>

  {/* Team Member 2 */}
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full h-48 object-cover" src="https://source.unsplash.com/100x100/?person" alt="Team Member 2" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-teal-500">Jane Smith</div>
      <p className="text-gray-700 text-base">Back-End Developer</p>
      <p className="text-gray-600 text-sm">Building the server-side architecture that powers websites.</p>
    </div>
  </div>

  {/* Team Member 3 */}
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full h-48 object-cover" src="https://source.unsplash.com/100x100/?person" alt="Team Member 3" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-yellow-500">Mark Taylor</div>
      <p className="text-gray-700 text-base">Project Manager</p>
      <p className="text-gray-600 text-sm">Ensuring smooth project delivery and team collaboration.</p>
    </div>
  </div>

  {/* Team Member 4 */}
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full h-48 object-cover" src="https://source.unsplash.com/100x100/?person" alt="Team Member 4" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-green-500">Alice Brown</div>
      <p className="text-gray-700 text-base">UI/UX Designer</p>
      <p className="text-gray-600 text-sm">Designing visually appealing and intuitive user interfaces.</p>
    </div>
  </div>

  {/* Team Member 5 */}
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full h-48 object-cover" src="https://source.unsplash.com/100x100/?person" alt="Team Member 5" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-pink-500">Emma Johnson</div>
      <p className="text-gray-700 text-base">Marketing Specialist</p>
      <p className="text-gray-600 text-sm">Developing strategies to boost brand awareness and reach.</p>
    </div>
  </div>

  {/* Team Member 6 */}
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full h-48 object-cover" src="https://source.unsplash.com/100x100/?person" alt="Team Member 6" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-500">Oliver King</div>
      <p className="text-gray-700 text-base">Content Writer</p>
      <p className="text-gray-600 text-sm">Creating high-quality content that resonates with the audience.</p>
    </div>
  </div>

  {/* Team Member 7 */}
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full h-48 object-cover" src="https://source.unsplash.com/100x100/?person" alt="Team Member 7" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-red-500">Sophia Green</div>
      <p className="text-gray-700 text-base">Customer Support</p>
      <p className="text-gray-600 text-sm">Providing top-notch support to our customers and clients.</p>
    </div>
  </div>
</div>

  )
}

export default Team
