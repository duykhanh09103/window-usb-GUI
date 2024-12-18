use powershell_script::PsScriptBuilder;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

#[tauri::command]
fn usb_call()  -> String{
    let ps = PsScriptBuilder::new()
    .no_profile(true)
    .non_interactive(true)
    .hidden(false)
    .print_commands(false)
    .build();
let output = ps.run(r#"Get-PnpDevice -Class 'USB' -Status OK| Format-Table -Autosize"#).unwrap();
format!("{}",output)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![usb_call])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
