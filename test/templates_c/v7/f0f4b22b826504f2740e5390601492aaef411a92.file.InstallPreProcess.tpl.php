<?php /* Smarty version Smarty-3.1.7, created on 2018-05-05 16:21:42
         compiled from "C:\xampp\htdocs\vtigercrm\includes\runtime/../../layouts/v7\modules\Install\InstallPreProcess.tpl" */ ?>
<?php /*%%SmartyHeaderCode:298105aedcc065ebf47-13324657%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f0f4b22b826504f2740e5390601492aaef411a92' => 
    array (
      0 => 'C:\\xampp\\htdocs\\vtigercrm\\includes\\runtime/../../layouts/v7\\modules\\Install\\InstallPreProcess.tpl',
      1 => 1520586669,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '298105aedcc065ebf47-13324657',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5aedcc065fb54',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5aedcc065fb54')) {function content_5aedcc065fb54($_smarty_tpl) {?>

<input type="hidden" id="module" value="Install" />
<input type="hidden" id="view" value="Index" />
<div class="container-fluid page-container">
	<div class="row">
		<div class="col-sm-6">
			<div class="logo">
				<img src="<?php echo vimage_path('logo.png');?>
"/>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="head pull-right">
				<h3><?php echo vtranslate('LBL_INSTALLATION_WIZARD','Install');?>
</h3>
			</div>
		</div>
	</div>
<?php }} ?>