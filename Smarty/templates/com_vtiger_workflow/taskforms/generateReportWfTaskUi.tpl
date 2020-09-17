{*<!--
/*************************************************************************************************
 * Copyright 2020 JPL TSolucio, S.L. -- This file is a part of TSOLUCIO coreBOS Customizations.
 * Licensed under the vtiger CRM Public License Version 1.1 (the "License"); you may not use this
 * file except in compliance with the License. You can redistribute it and/or modify it
 * under the terms of the License. JPL TSolucio, S.L. reserves all rights not expressly
 * granted by the License. coreBOS distributed by JPL TSolucio S.L. is distributed in
 * the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. Unless required by
 * applicable law or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing
 * permissions and limitations under the License. You may obtain a copy of the License
 * at <http://corebos.org/documentation/doku.php?id=en:devel:vpl11>
 *************************************************************************************************
 *  Author       : JPL TSolucio, S. L.
 *************************************************************************************************//
-->*}
<script src="modules/com_vtiger_workflow/resources/vtigerwebservices.js" type="text/javascript" charset="utf-8"></script>
<script src="modules/com_vtiger_workflow/resources/generateReportWfTask.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">var moduleName = '{$entityName}';</script>
<script type="text/javascript" charset="utf-8">
var reportName = {$task->reportName|json_encode};
var questionName = {$task->questionName|json_encode};
</script>
<div class="slds-form-element">
	<div class="slds-form-element__control">
		<table class="slds-table slds-table_cell-buffer" id="typeDiv" style="width:100%;">
			<tr>
				<td>
					<label class="slds-form-element__label" for="case_type">{'Select source module'|@getTranslatedString}</label>
				</td>
			</tr>
			<tr>
				<td>
					<div class="slds-select_container">
						<select class="slds-select" name ="case_type" id="case_type" onchange="displayDivsection()">
							<option {if ($task->caseType eq "report")}{"selected"}{/if} value="report">{'Report'|@getTranslatedString}</option>
							<option {if ($task->caseType eq "question")}{"selected"}{/if} value="question">{'Business Question'|@getTranslatedString}</option>
						</select>
					</div>
				</td>
			</tr>
		</table>
		<table class="slds-table slds-table_cell-buffer" id="reportDiv" style="width:100%;">
			<tr>
				<td>
					<label class="slds-form-element__label" for="report_name">{'Select Report'|@getTranslatedString}</label>
				</td>
			</tr>
			<tr>
				<td>
					<div class="slds-select_container">
						<select class="slds-select" name ="report_name" id="report_name">
						</select>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<label class="slds-form-element__label" for="file_type">{'Select File Type'|@getTranslatedString}</label>
				</td>	
			</tr>
			<tr>
				<td>
					<div class="slds-select_container">
						<select class="slds-select" name ="file_type"  id="file_type">
							<option {if ($task->reportFileType eq "pdf")}{"selected"}{/if} value="pdf">{'PDF'|@getTranslatedString}</option>
							<option {if ($task->reportFileType eq "csv")}{"selected"}{/if} value="csv">{'CSV'|@getTranslatedString}</option>
							<option {if ($task->reportFileType eq "excel")}{"selected"}{/if} value="excel">{'Excel'|@getTranslatedString}</option>
						</select>
					</div>
				</td>
			</tr>
		</table><br/>
		<table class="slds-table slds-table_cell-buffer" id="questionDiv" style="width:100%; display:none;">
			<tr>
				<td>
					<label class="slds-form-element__label" for="question_name">{'Select Business Question'|@getTranslatedString}</label>
				</td>
			</tr>
			<tr>
				<td>
					<div class="slds-select_container">
						<select class="slds-select" name ="question_name" id="question_name">
						</select>
					</div>
				</td>
			</tr>
		</table>
	</div>
</div>