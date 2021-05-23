const getColor = () => {
    const colors = ["#7ee098", "#83bbe6", "#a881e3", "#cb81e3", "#e07ed5", "#e07b9d", "#d65c60", "#d6815a", "#d9b259",
        "#ccdb5a", "#89db5a", "#56d6d4"]
    return colors[Math.floor(Math.random() * colors.length)]
}