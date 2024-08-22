
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import {
    getallprojectinfos, getallconceptReview, getallmodelApproach, getalloutputDetail, getallDataDetails, getallDetailedSpec,
    getProject, getconceptReview, getmodelApproach, getoutputDetail, getDataDetails, getDetailedSpec
} from '@/utilities/axios/project/createProject';

interface SelectedIds {
    ids: number[];
}

export const exportselected = async (selected: number[]) => {
    try {
        console.log("exporting selected");  
        // -----------------Project Infos---------------------
        var rows: any = [];
        for (var h = 0; h < selected.length; h++) {
            const projectInfos = await getProject(selected[h]);
            rows.push({
                ProjectID: projectInfos.data.id,
                ProjectName: projectInfos.data.attributes.ProjectName,
                ProjectCode: projectInfos.data.attributes.ProjectCode,
                ProjectManager: projectInfos.data.attributes.ProjectManager,
                ProjectVerifier: projectInfos.data.attributes.ProjectVerifier,
                ClientScope: projectInfos.data.attributes.ClientScope,
                Budget: projectInfos.data.attributes.Budget,
                StudyOther: projectInfos.data.attributes.StudyOther,
                master_type_study: projectInfos.data.attributes.master_type_study.data.attributes.Field,
                CreatedByUserName: projectInfos.data.attributes.CreatedByUserName.data.attributes.username,
                CreatedByUserNameID: projectInfos.data.attributes.CreatedByUserName.data.id,
                Advisor: projectInfos.data.attributes.Advisor.data.attributes.username,
                Lead: projectInfos.data.attributes.Lead.data.attributes.username,
                Originator: projectInfos.data.attributes.Originator.data.attributes.username,
                createdAt: projectInfos.data.attributes.createdAt,
                updatedAt: projectInfos.data.attributes.updatedAt,
            })
        }
        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Project Infos");

        // -----------------Concept Review---------------------
        var rows: any = [];
        for (var h = 0; h < selected.length; h++) {
            const conceptReviews = await getconceptReview(selected[h]);
            for (var i = 0; i < conceptReviews.data.length; i++) {
                if (conceptReviews && conceptReviews.data) rows.push({
                    id: conceptReviews.data.id,
                    ProjectName: conceptReviews.data[i].attributes.ProjectID.data ? conceptReviews.data[i].attributes.ProjectID.data.attributes.ProjectName : "NA",
                    ProjectID: conceptReviews.data[i].attributes.ProjectID.data ? conceptReviews.data[i].attributes.ProjectID.data.id : "NA",
                    Modelling_Objective: conceptReviews.data[i].attributes.Modelling_Objective,
                    Link_to_Hydrology: conceptReviews.data[i].attributes.Link_to_Hydrology,
                    Main_Data_Gaps: conceptReviews.data[i].attributes.Main_Data_Gaps,
                    Main_Assumption_Risk: conceptReviews.data[i].attributes.Main_Assumption_Risk,
                    Data_Management_Strategy: conceptReviews.data[i].attributes.Data_Management_Strategy,
                    Events_To_Be_Modelled: conceptReviews.data[i].attributes.Events_To_Be_Modelled,
                    Climate_Change_Approach: conceptReviews.data[i].attributes.Climate_Change_Approach,
                    Modelling_Task: conceptReviews.data[i].attributes.Modelling_Task.data.attributes.Field,
                    ModellingTaskOther: conceptReviews.data[i].attributes.ModellingTaskOther,
                    createdAt: conceptReviews.data[i].attributes.createdAt,
                    updatedAt: conceptReviews.data[i].attributes.updatedAt,
                })
            }
        }
        const worksheet2 = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(workbook, worksheet2, "Concept Reviews");

        // -----------------Model Approach---------------------
        var rows: any = [];
        for (var h = 0; h < selected.length; h++) {
            const modelApproaches = await getmodelApproach(selected[h]);
            for (var i = 0; i < modelApproaches.data.length; i++) {
                var s = "";
                for (var k = 0; k < modelApproaches.data[i].attributes.ModelSoftware_ID.data.length; k++) {
                    s += (modelApproaches.data[i].attributes.ModelSoftware_ID.data[k].attributes.Field)
                    if (k != modelApproaches.data[i].attributes.ModelSoftware_ID.data.length - 1) s += ', ';
                }

                var s2 = "";
                for (var k = 0; k < modelApproaches.data[i].attributes.ModelSystem_ID.data.length; k++) {
                    s2 += (modelApproaches.data[i].attributes.ModelSystem_ID.data[k].attributes.Field)
                    if (k != modelApproaches.data[i].attributes.ModelSystem_ID.data.length - 1) s2 += ', ';
                }

                rows.push({
                    id: modelApproaches.data[i].id,
                    ProjectName: modelApproaches.data[i].attributes.ProjectID.data ? modelApproaches.data[i].attributes.ProjectID.data.attributes.ProjectName : "NA",
                    ProjectID: modelApproaches.data[i].attributes.ProjectID.data ? modelApproaches.data[i].attributes.ProjectID.data.id : "NA",
                    ModelType_ID: modelApproaches.data[i].attributes.ModelType_ID.data.attributes.Field,
                    ModelSoftware_ID: s,
                    ModelSystem_ID: s2,
                    createdAt: modelApproaches.data[i].attributes.createdAt,
                    updatedAt: modelApproaches.data[i].attributes.updatedAt,
                })
            }
        }
        const worksheet3 = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(workbook, worksheet3, "Model Approaches");

        // -----------------Output Detail---------------------
        var rows: any = [];
        for (var h = 0; h < selected.length; h++) {
            const outputDetails = await getoutputDetail(selected[h]);
            for (var i = 0; i < outputDetails.data.length; i++) {
                rows.push({
                    id: outputDetails.data[i].id,
                    ProjectName: outputDetails.data[i]?.attributes.projectID?.data ? outputDetails.data[i].attributes.projectID?.data?.attributes.ProjectName : "NA",
                    ProjectID: outputDetails.data[i].attributes.projectID.data ? outputDetails.data[i].attributes.projectID.data.id : "NA",
                    OutputName: outputDetails.data[i].attributes.OutputName.data.attributes.Field,
                    Notes: outputDetails.data[i].attributes.Notes,
                    ClientDeliverable: outputDetails.data[i].attributes.ClientDeliverable ? outputDetails.data[i].attributes.ClientDeliverable : "",

                })
            }
        }
        const worksheet4 = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(workbook, worksheet4, "Output Details");

        // -----------------Data Details---------------------
        var rows: any = [];
        for (var h = 0; h < selected.length; h++) {
            const dataDetails = await getDataDetails(selected[h]);
            for (var i = 0; i < dataDetails.data.length; i++) {
                rows.push({
                    id: dataDetails.data[i].id,
                    Projectid: dataDetails.data[i].attributes.ProjectID.data ? dataDetails.data[i].attributes.ProjectID.data.id : "NA",
                    ProjectName: dataDetails.data[i].attributes.ProjectID.data ? dataDetails.data[i].attributes.ProjectID.data.attributes.ProjectName : "NA",
                    Data: dataDetails.data[i].attributes.Data,
                    DescriptionUse: dataDetails.data[i].attributes.DescriptionUse,
                    Location: dataDetails.data[i].attributes.Location,
                    DataAdded: dataDetails.data[i].attributes.DataAdded,
                    Source: dataDetails.data[i].attributes.Source,
                    createdAt: dataDetails.data[i].attributes.createdAt,
                    updatedAt: dataDetails.data[i].attributes.updatedAt,
                })
            }
        }
        const worksheet5 = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(workbook, worksheet5, "Data Details");


        // -----------------Detailed Spec---------------------
        var rows: any = [];
        for (var h = 0; h < selected.length; h++) {
            continue;
            const detailedSpecs = await getDetailedSpec(selected[h]);
            for (var i = 0; i < detailedSpecs.data.length; i++) {
                rows.push({
                    id: detailedSpecs.data[i].id,
                    ProjectName: detailedSpecs.data[i]?.attributes?.ProjectID.data ? detailedSpecs.data[i].attributes.ProjectID.data.attributes.ProjectName : "NA",
                    ProjectID: detailedSpecs.data[i]?.attributes?.ProjectID.data ? detailedSpecs.data[i].attributes.ProjectID.data.id : "NA",
                    Category: detailedSpecs.data[i]?.attributes?.MasterSpecQueryID.data.attributes.Category1 ? detailedSpecs.data[i]?.attributes?.MasterSpecQueryID.data.attributes.Category1 : "Other",
                    Query: detailedSpecs.data[i]?.attributes?.MasterSpecQueryID.data.attributes.Query ? detailedSpecs.data[i]?.attributes?.MasterSpecQueryID.data.attributes.Query : "Other",
                    Response: detailedSpecs.data[i].attributes.Response,
                    createdAt: detailedSpecs.data[i].attributes.createdAt,
                    updatedAt: detailedSpecs.data[i].attributes.updatedAt,
                })
            }
        }
        const worksheet6 = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(workbook, worksheet6, "Detailed Specification");


        // -----------------Download---------------------
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        saveAs(blob, "Dashboard.xlsx");

    } catch (error) {
        console.log(error);
        alert(error);
        return;
    }
}

export const exportToExcel = async () => {
    try {

        // -----------------Project Infos---------------------
        const projectInfos = await getallprojectinfos();
        var rows: any = [];
        for (var i = 0; i < projectInfos.data.length; i++) {
            rows.push({
                ProjectID: projectInfos.data[i].id,
                ProjectName: projectInfos.data[i].attributes.ProjectName,
                ProjectCode: projectInfos.data[i].attributes.ProjectCode,
                ProjectManager: projectInfos.data[i].attributes.ProjectManager,
                ProjectVerifier: projectInfos.data[i].attributes.ProjectVerifier,
                ClientScope: projectInfos.data[i].attributes.ClientScope,
                Budget: projectInfos.data[i].attributes.Budget,
                StudyOther: projectInfos.data[i].attributes.StudyOther,
                master_type_study: projectInfos.data[i].attributes.master_type_study.data.attributes.Field,
                CreatedByUserName: projectInfos.data[i].attributes.CreatedByUserName.data.attributes.username,
                CreatedByUserNameID: projectInfos.data[i].attributes.CreatedByUserName.data.id,
                Advisor: projectInfos.data[i].attributes.Advisor.data.attributes.username,
                Lead: projectInfos.data[i].attributes.Lead.data.attributes.username,
                Originator: projectInfos.data[i].attributes.Originator.data.attributes.username,
                createdAt: projectInfos.data[i].attributes.createdAt,
                updatedAt: projectInfos.data[i].attributes.updatedAt,
            })
        }
        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Project Infos");

        // -----------------Concept Review---------------------
        const conceptReviews = await getallconceptReview();
        var rows: any = [];
        for (var i = 0; i < conceptReviews.data.length; i++) {
            rows.push({
                id: conceptReviews.data[i].id,
                ProjectName: conceptReviews.data[i].attributes.ProjectID.data ? conceptReviews.data[i].attributes.ProjectID.data.attributes.ProjectName : "NA",
                ProjectID: conceptReviews.data[i].attributes.ProjectID.data ? conceptReviews.data[i].attributes.ProjectID.data.id : "NA",
                Modelling_Objective: conceptReviews.data[i].attributes.Modelling_Objective,
                Link_to_Hydrology: conceptReviews.data[i].attributes.Link_to_Hydrology,
                Main_Data_Gaps: conceptReviews.data[i].attributes.Main_Data_Gaps,
                Main_Assumption_Risk: conceptReviews.data[i].attributes.Main_Assumption_Risk,
                Data_Management_Strategy: conceptReviews.data[i].attributes.Data_Management_Strategy,
                Events_To_Be_Modelled: conceptReviews.data[i].attributes.Events_To_Be_Modelled,
                Climate_Change_Approach: conceptReviews.data[i].attributes.Climate_Change_Approach,
                Modelling_Task: conceptReviews.data[i].attributes.Modelling_Task.data.attributes.Field,
                ModellingTaskOther: conceptReviews.data[i].attributes.ModellingTaskOther,
                createdAt: conceptReviews.data[i].attributes.createdAt,
                updatedAt: conceptReviews.data[i].attributes.updatedAt,
            })
        }
        const worksheet2 = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(workbook, worksheet2, "Concept Reviews");

        // -----------------Model Approach---------------------
        const modelApproaches = await getallmodelApproach();
        var rows: any = [];
        for (var i = 0; i < modelApproaches.data.length; i++) {
            var s = "";
            for (var k = 0; k < modelApproaches.data[i].attributes.ModelSoftware_ID.data.length; k++) {
                s += (modelApproaches.data[i].attributes.ModelSoftware_ID.data[k].attributes.Field)
                if (k != modelApproaches.data[i].attributes.ModelSoftware_ID.data.length - 1) s += ', ';
            }

            var s2 = "";
            for (var k = 0; k < modelApproaches.data[i].attributes.ModelSystem_ID.data.length; k++) {
                s2 += (modelApproaches.data[i].attributes.ModelSystem_ID.data[k].attributes.Field)
                if (k != modelApproaches.data[i].attributes.ModelSystem_ID.data.length - 1) s2 += ', ';
            }

            rows.push({
                id: modelApproaches.data[i].id,
                ProjectName: modelApproaches.data[i].attributes.ProjectID.data ? modelApproaches.data[i].attributes.ProjectID.data.attributes.ProjectName : "NA",
                ProjectID: modelApproaches.data[i].attributes.ProjectID.data ? modelApproaches.data[i].attributes.ProjectID.data.id : "NA",
                ModelType_ID: modelApproaches.data[i].attributes.ModelType_ID.data.attributes.Field,
                ModelSoftware_ID: s,
                ModelSystem_ID: s2,
                createdAt: modelApproaches.data[i].attributes.createdAt,
                updatedAt: modelApproaches.data[i].attributes.updatedAt,
            })
        }
        const worksheet3 = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(workbook, worksheet3, "Model Approaches");

        // -----------------Output Detail---------------------
        const outputDetails = await getalloutputDetail();
        var rows: any = [];
        for (var i = 0; i < outputDetails.data.length; i++) {
            rows.push({
                id: outputDetails.data[i].id,
                ProjectName: outputDetails.data[i]?.attributes.projectID?.data ? outputDetails.data[i].attributes.projectID?.data?.attributes.ProjectName : "NA",
                ProjectID: outputDetails.data[i].attributes.projectID.data ? outputDetails.data[i].attributes.projectID.data.id : "NA",
                OutputName: outputDetails.data[i].attributes.OutputName.data.attributes.Field,
                Notes: outputDetails.data[i].attributes.Notes,
                ClientDeliverable: outputDetails.data[i].attributes.ClientDeliverable ? outputDetails.data[i].attributes.ClientDeliverable : "",

            })
        }
        const worksheet4 = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(workbook, worksheet4, "Output Details");

        // -----------------Data Details---------------------
        const dataDetails = await getallDataDetails();
        var rows: any = [];
        for (var i = 0; i < dataDetails.data.length; i++) {
            rows.push({
                id: dataDetails.data[i].id,
                Projectid: dataDetails.data[i].attributes.ProjectID.data ? dataDetails.data[i].attributes.ProjectID.data.id : "NA",
                ProjectName: dataDetails.data[i].attributes.ProjectID.data ? dataDetails.data[i].attributes.ProjectID.data.attributes.ProjectName : "NA",
                Data: dataDetails.data[i].attributes.Data,
                DescriptionUse: dataDetails.data[i].attributes.DescriptionUse,
                Location: dataDetails.data[i].attributes.Location,
                DataAdded: dataDetails.data[i].attributes.DataAdded,
                Source: dataDetails.data[i].attributes.Source,
                createdAt: dataDetails.data[i].attributes.createdAt,
                updatedAt: dataDetails.data[i].attributes.updatedAt,
            })
        }
        const worksheet5 = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(workbook, worksheet5, "Data Details");


        // -----------------Detailed Spec---------------------
        const detailedSpecs = await getallDetailedSpec();
        var rows: any = [];
        for (var i = 0; i < detailedSpecs.data.length; i++) {
            rows.push({
                id: detailedSpecs.data[i].id,
                ProjectName: detailedSpecs.data[i]?.attributes?.ProjectID.data ? detailedSpecs.data[i].attributes.ProjectID.data.attributes.ProjectName : "NA",
                ProjectID: detailedSpecs.data[i]?.attributes?.ProjectID.data ? detailedSpecs.data[i].attributes.ProjectID.data.id : "NA",
                Category: detailedSpecs.data[i]?.attributes?.MasterSpecQueryID.data.attributes.Category1 ? detailedSpecs.data[i]?.attributes?.MasterSpecQueryID.data.attributes.Category1 : "Other",
                Query: detailedSpecs.data[i]?.attributes?.MasterSpecQueryID.data.attributes.Query ? detailedSpecs.data[i]?.attributes?.MasterSpecQueryID.data.attributes.Query : "Other",
                Response: detailedSpecs.data[i].attributes.Response,
                createdAt: detailedSpecs.data[i].attributes.createdAt,
                updatedAt: detailedSpecs.data[i].attributes.updatedAt,
            })
        }
        const worksheet6 = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(workbook, worksheet6, "Detailed Specification");


        // -----------------Download---------------------
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        saveAs(blob, "Dashboard.xlsx");

    } catch (error) {
        console.log(error);
        // alert("error occurred")
        return;
    }
}