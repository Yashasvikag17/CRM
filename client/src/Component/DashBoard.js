import React from 'react'
import Chart from "./Chart"
export default function DashBoard() {
    return (
        <div>
            <div className='UpperBlock' style={{ display: "flex" }}>
                <div style={{ border: "none", boxShadow: "11px 11px 11px 0 ", borderRadius: "22px", margin: "15px 19px 37px 29px", padding: "16px 16px 12px 15px" }}>
                    <div style={{
                        padding: "0 0 0 0",
                        margin: "3px -8px -6px -10px"
                    }}>
                        <div style={{
                            padding: "4px 23px 11px 60px",
                            border: "none",
                            borderBottom: "1px solid grey"
                        }}>
                            Invoices
                        </div>
                        <div style={{
                            margin: "auto",
                            padding: "15px 43px 7px 21px"
                        }}>
                            This Month <span style={{
                                border: "1px solid black",
                                background: "#efe6e8",
                                padding: "1px 1px 0px 2px",
                                margin: "5px 1px 15px 16px"
                            }} >00.00</span>
                        </div>
                    </div>
                </div>

                <div style={{ border: "none", boxShadow: "11px 11px 11px 0 ", borderRadius: "22px", margin: "15px 19px 37px 29px", padding: "16px 16px 12px 15px" }}>
                    <div style={{
                        padding: "0 0 0 0",
                        margin: "3px -8px -6px -10px"
                    }}>
                        <div style={{
                            padding: "4px 23px 11px 60px",
                            border: "none",
                            borderBottom: "1px solid grey"
                        }}>
                            Unpaid
                        </div>
                        <div style={{
                            margin: "auto",
                            padding: "15px 15px 7px 21px"
                        }}>
                            This Month <span style={{
                                border: "1px solid black",
                                background: "#efe6e8",
                                padding: "1px 1px 0px 2px",
                                margin: "5px 1px 15px 16px"
                            }} >00.00</span>
                        </div>
                    </div>
                </div>

                <div style={{ border: "none", boxShadow: "11px 11px 11px 0 ", borderRadius: "22px", margin: "15px 19px 37px 29px", padding: "16px 16px 12px 15px" }}>
                    <div style={{
                        padding: "0 0 0 0",
                        margin: "3px -8px -6px -10px"
                    }}>
                        <div style={{
                            padding: "4px 23px 11px 60px",
                            border: "none",
                            borderBottom: "1px solid grey"
                        }}>
                            Payment
                        </div>
                        <div style={{
                            margin: "auto",
                            padding: "15px 15px 7px 21px"
                        }}>
                            This Month <span style={{
                                border: "1px solid black",
                                background: "#efe6e8",
                                padding: "1px 1px 0px 2px",
                                margin: "5px 1px 15px 16px"
                            }} >00.00</span>
                        </div>
                    </div>
                </div>

                <div style={{ border: "none", boxShadow: "11px 11px 11px 0 ", borderRadius: "22px", margin: "15px 19px 37px 29px", padding: "16px 16px 12px 15px" }}>
                    <div style={{
                        padding: "0 0 0 0",
                        margin: "3px -8px -6px -10px"
                    }}>
                        <div style={{
                            padding: "4px 23px 11px 60px",
                            border: "none",
                            borderBottom: "1px solid grey"
                        }}>
                            Employee
                        </div>
                        <div style={{
                            margin: "auto",
                            padding: "15px 15px 7px 21px"
                        }}>
                            This Month: <span style={{
                                border: "1px solid black",
                                background: "#efe6e8",
                                padding: "1px 1px 0px 2px",
                                margin: "5px 1px 15px 16px"
                            }} >00.00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='MiddleBlock' style={{border:"2px solid black", display:"flex"}}>
                   <div>
                    {/* <Chart/> */}1
                   </div>
                   <div style={{ border: "none", boxShadow: "11px 11px 11px 0 ", borderRadius: "22px", margin: "15px 19px 37px 29px", padding: "16px 16px 12px 15px",  height:"300px"}}>
                    <div style={{
                        padding: "0 0 0 0",
                        margin: "3px -8px -6px -10px"
                    }}>
                        <div style={{
                            padding: "4px 23px 11px 60px",
                            border: "none",
                            borderBottom: "1px solid grey"
                        }}>
                            Customer
                        </div>
                        <div style={{
                            margin: "auto",
                            padding: "15px 15px 7px 21px"
                        }}>
                            This Month: <span style={{
                                border: "1px solid black",
                                background: "#efe6e8",
                                padding: "1px 1px 0px 2px",
                                margin: "5px 1px 15px 16px"
                            }} >00.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='LowerBlock' style={{display:"flex"}}>
                  <div style={{ border:"2px solid" ,border:"none",boxShadow:"9px 3px 12px 2px",margin:"39px 32px 20px 96px", height:"300px", padding:"12px 12px 12px 12px", width:"50%"}}>
                  <h6>Recent Employee</h6>
                  <table class="table" style={{width:"350px"}}>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
   No data
   
   
  </tbody>
</table>
                  </div>

                  <div  style={{ border:"2px solid" ,border:"none",boxShadow:"9px 3px 12px 2px",margin:"39px 132px 20px 96px", height:"300px", padding:"12px 12px 12px 12px", width:"50%"}}>
                  <h6>Recent Invoice</h6>
                  <table class="table" style={{width:"350px"}}>
  <thead>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Client</th>
      <th scope="col">Total</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody >
    No data
   
   
  </tbody>
</table>
                  </div>
            </div>

        </div>
    )
}
