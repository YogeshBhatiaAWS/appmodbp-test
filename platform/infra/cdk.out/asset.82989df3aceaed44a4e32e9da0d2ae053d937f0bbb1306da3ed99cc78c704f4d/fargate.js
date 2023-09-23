"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FargateProfileResourceHandler=void 0;const client_eks_1=require("@aws-sdk/client-eks"),common_1=require("./common"),MAX_NAME_LEN=63;class FargateProfileResourceHandler extends common_1.ResourceHandler{async onCreate(){const createFargateProfile={fargateProfileName:this.event.ResourceProperties.Config.fargateProfileName??this.generateProfileName(),...this.event.ResourceProperties.Config};this.log({createFargateProfile});const createFargateProfileResponse=await this.eks.createFargateProfile(createFargateProfile);if(this.log({createFargateProfileResponse}),!createFargateProfileResponse.fargateProfile)throw new Error("invalid CreateFargateProfile response");return{PhysicalResourceId:createFargateProfileResponse.fargateProfile.fargateProfileName,Data:{fargateProfileArn:createFargateProfileResponse.fargateProfile.fargateProfileArn}}}async onDelete(){if(!this.physicalResourceId)throw new Error("Cannot delete a profile without a physical id");const deleteFargateProfile={clusterName:this.event.ResourceProperties.Config.clusterName,fargateProfileName:this.physicalResourceId};this.log({deleteFargateProfile});const deleteFargateProfileResponse=await this.eks.deleteFargateProfile(deleteFargateProfile);this.log({deleteFargateProfileResponse})}async onUpdate(){return this.onCreate()}async isCreateComplete(){return this.isUpdateComplete()}async isUpdateComplete(){return{IsComplete:await this.queryStatus()==="ACTIVE"}}async isDeleteComplete(){return{IsComplete:await this.queryStatus()==="NOT_FOUND"}}generateProfileName(){const suffix=this.requestId.replace(/-/g,""),offset=MAX_NAME_LEN-suffix.length-1;return`${this.logicalResourceId.slice(0,offset>0?offset:0)}-${suffix}`}async queryStatus(){if(!this.physicalResourceId)throw new Error("Unable to determine status for fargate profile without a resource name");const describeFargateProfile={clusterName:this.event.ResourceProperties.Config.clusterName,fargateProfileName:this.physicalResourceId};try{this.log({describeFargateProfile});const describeFargateProfileResponse=await this.eks.describeFargateProfile(describeFargateProfile);this.log({describeFargateProfileResponse});const status=describeFargateProfileResponse.fargateProfile?.status;if(status==="CREATE_FAILED"||status==="DELETE_FAILED")throw new Error(status);return status}catch(describeFargateProfileError){if(describeFargateProfileError instanceof client_eks_1.ResourceNotFoundException)return this.log("received ResourceNotFoundException, this means the profile has been deleted (or never existed)"),"NOT_FOUND";throw this.log({describeFargateProfileError}),describeFargateProfileError}}}exports.FargateProfileResourceHandler=FargateProfileResourceHandler;
