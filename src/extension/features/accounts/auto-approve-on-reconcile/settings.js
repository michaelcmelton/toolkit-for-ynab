/**
 * @typedef {import '../../../types/toolkit/features.ts'} FeatureSettings
 */
module.exports = {
  name: 'AutoApproveOnReconcile',
  type: 'checkbox',
  default: false,
  section: 'accounts',
  title: 'Auto Approve On Reconcile',
  description: 'Automatically approve transactions when accounts are successfully reconciled.',
};
