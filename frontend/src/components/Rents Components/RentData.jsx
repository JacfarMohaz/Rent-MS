// import { Link } from "react-router-dom"

import { Link } from "react-router-dom"

function RentData(props) {
    return <tbody className="">
        <tr className="">
            <td className="p-3 text-sm text-gray-700">{props.sn}</td>
            <td className="p-3 text-sm text-gray-700">{props.siteName}</td>
            <td className="p-3 text-sm text-gray-700">{props.district}</td>
            <td className="p-3 text-sm text-gray-700">{props.landlordName}</td>
            <td className="p-3 text-sm text-gray-700">{props.phone}</td>
            <td className="p-3 text-sm text-gray-700">{props.startDate}</td>
            <td className="p-3 text-sm text-gray-700">{props.endDate}</td>
            <td className="p-3 text-sm text-gray-700">{props.sitePost}</td>
            <td className="p-3 text-sm text-gray-700">${props.rentCost}</td>
            <td className="p-3 text-sm text-gray-700">
                <div className="flex gap-5">
                    {/* {props.Contracts}  */}
                   <a href={`http://localhost:5000/alldocs/${props.Contracts}` } target="_blank"> 
                    <i  class="fa-regular text-xl text-blue-500 cursor-pointer fa-file-pdf"></i>
                    </a> 
                </div>

            </td>
            <td className="p-3 text-sm text-gray-700">
                <div className="flex items-center cursor-pointer gap-5">
                    <Link to={`/updaterents/${props.updateID}`}><i className="fa-solid text-xl text-green-400 fa-pen-to-square"></i></Link>
                    <i onClick={props.rentsDelete} className="fa-solid text-xl text-red-500 fa-trash"></i>
                </div>
            </td>
        </tr>
    </tbody>
}

export default RentData