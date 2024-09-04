package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Table(name = "notification")
@Entity
public class Notification {
    @Id
    private Long id;
    private String name;
    private LocalDateTime createAt;
    private String content;
    private Boolean ack;

    @ManyToMany
    @JoinTable(name = "user_notify",
    joinColumns = @JoinColumn(name = "notification_id"),
    inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> users;

}
