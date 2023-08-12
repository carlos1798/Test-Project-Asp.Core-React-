namespace TodoList.Models
{
    public class TodoItemDTO
    {
        public long id { get; set; }
        public string? Name { get; set; }
        public bool isComplete { get; set; }
    }
}