import React from 'react'

export default function Grid(props) {
  return (
    <div className='container-fluid'>
        <table className="table table-hover">
            <thead>
                <tr>
                    {
                        props.field.map(
                            field=>
                                <th key={field}>
                                    {field}
                                    <span className="dropdown">
                                        <button className="bi bi-three-dots-vertical btn" data-bs-toggle="dropdown">
                                            <ul className="dropdown-menu">
                                                <li className='dropdown-item'>
                                                    <span className="bi bi-sort-alpha-down">Sort Ascending</span>
                                                </li>
                                                <li className='dropdown-item'>
                                                    <span className="bi bi-sort-alpha-up">Sort Descending</span>
                                                </li>
                                            </ul>
                                        </button>
                                    </span>
                                </th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(
                        item=>
                            <tr key={item}>
                                {
                                    Object.keys(item).map(
                                        key=>
                                            <td key={key}>
                                                {item[key]}
                                            </td>
                                    )
                                }
                            </tr>

                    )
                }
            </tbody>
        </table>
    </div>
  )
}
