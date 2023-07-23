//your parameter variables go here!
let eyeSize = 10; 
  let headX = 199/2;
  let headY = 199/2;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  fill(255); 
  stroke(50, 153, 168); 

  ellipse(80, 45, 20, 70) 
  ellipse (120, 45, 20, 70)

  ellipse(headX, headY, 80, 80); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down
 
  arc(106.5, 120, 15, 10, 0, 180)
  arc(91.5, 120, 15, 10, 0, 180) 

  triangle(86, 109, 99, 120, 113, 109) 

  fill(50, 194, 187)

  ellipse(85, 89, eyeSize, eyeSize)
  ellipse(115, 89, eyeSize, eyeSize) 

}
