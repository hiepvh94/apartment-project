import React from 'react';

class Search extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <form action="" method="get" accept-charset="utf-8">
					<div class="row">
						<div class="col-md-4">
							<div class="form-group ">
								<label for="paidDateFrom" class="col-form-label">Thời
									gian đóng từ:</label>
								<div>
									<input type="text" class="form-control datepicker" id="paidDateFrom" 
										 placeholder="dd/MM/yyyy" name="paidDateFrom" autocomplete="off"/>
									<div class="invalid-feedback">
   										<span id="errPaidDateFrom"></span>	
  									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group ">
								<label for="paidDateTo" class="col-form-label">Thời gian
									đóng đến:</label>
								<div>
									<input type="text" class="form-control datepicker" id="paidDateTo"
										 placeholder="dd/MM/yyyy" name="paidDateTo" autocomplete="off"/>
									<div class="invalid-feedback">
   										<span id="errPaidDateTo"></span>	
  									</div>	
								</div>
							</div>

						</div>

					</div>
					<div class="d-flex justify-content-between">
						<div>
							<button type="button" class="btn btn-primary" id="btnSearch">
								<i class="fas fa-search mr-2"></i>Tìm kiếm
							</button>
							<button type="reset" class="btn btn-secondary ml-2" id="btnReset">
								<i class="fas fa-eraser mr-2"></i>Đặt lại
							</button>
						</div>
						
					</div>
				</form>
        )
    }
}

export default Search;