/*alert("funcioona")*/
  const alumnos=["Erick","Karina","Patricia","kjaris","Bruno"]
  console.log("alumnos",alumnos)
  console.log(alumnos[2])
  console.log(alumnos[4])

  alumnos[0]="Pepe"
  console.log("alumno reasignado:",alumnos[0])

  alumnos[5]="Juan"
  console.log("Creando un nuevo elemento",alumnos)

  console.log(alumnos.length)

  alumnos[alumnos.length] = "Daniel"

  console.log("ultimo elemento",alumnos[alumnos.length-1])
