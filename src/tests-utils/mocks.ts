const getFastifyMock = () => ({
    routes: jest.fn().mockReturnThis(),
})

export { getFastifyMock }
